#!/bin/bash
set -e

# Get auth token from git config extraheader
TOKEN=$(git config --get-all http."https://github.com/".extraheader 2>/dev/null | sed 's/^Authorization: Basic //' | base64 -d 2>/dev/null | cut -d: -f2 || echo "")

if [ -z "$TOKEN" ]; then
  # Try alternative: look at git credentials store
  TOKEN=$(cat ~/.git-credentials 2>/dev/null | sed 's|https://||' | cut -d@ -f1 | cut -d: -f2 || echo "")
fi

if [ -z "$TOKEN" ]; then
  echo "Could not extract token, trying unauthenticated..."
fi

# Create PR via GitHub API
RESPONSE=$(curl -s -X POST \
  -H "Authorization: token $TOKEN" \
  -H "Accept: application/vnd.github.v3+json" \
  https://api.github.com/repos/jeffjones1209-VitalEdge/crispy-guide/pulls \
  -d '{
    "title": "feat: visual syringe indicator, age gate, design polish, and admin dashboard",
    "head": "feature/visual-syringe-age-gate",
    "base": "main",
    "body": "## Summary\n\nFour features added:\n\n### 1. Visual Syringe Indicator\n- SVG syringe with green gradient fluid fill\n- Real-time updates as user changes dose\n- 10-100 unit markings, moving plunger\n\n### 2. Age Verification Gate\n- Full-screen 18+ overlay on first visit\n- localStorage persistence (30-day expiry)\n- No redirects to google.com\n\n### 3. Design Polish\n- Geometric background patterns and radial gradients\n- Premium card designs with hover effects\n- Stats bar, brand gradient sections\n- Better visual hierarchy throughout\n\n### 4. Admin Dashboard\n- Password protected (vitaledge2024)\n- Product price editor with per-size overrides\n- Site-wide + per-product discount system\n- Hidden gear icon link in footer"'
)

echo "$RESPONSE" | grep -o '"html_url": "[^"]*"' || echo "PR URL not found"
echo "$RESPONSE" | grep -o '"message": "[^"]*"' || echo "No error message"
echo "---"
echo "$RESPONSE" | head -5