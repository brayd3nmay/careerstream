import { PersonalityTrait } from "../personality/questions";
import { TraitScore } from "../personality/scoring";

interface EmailData {
  traitScores: TraitScore[];
  topTraits: PersonalityTrait[];
}

/**
 * Generates a beautiful, dark-themed HTML email for personality assessment results.
 * 
 * @param data - Object containing trait scores and top traits
 * @returns Complete HTML string for the email
 */
export function generateResultsEmailHtml({ traitScores, topTraits }: EmailData): string {
  // Sort traits by score descending
  const sortedTraits = [...traitScores].sort((a, b) => b.percentage - a.percentage);
  
  // Generate trait progress bars
  const traitBars = sortedTraits.map(({ trait, percentage }) => `
    <tr>
      <td style="padding: 10px 0; color: #a3a3a3; font-size: 14px; width: 140px; vertical-align: middle;">
        ${trait}
      </td>
      <td style="padding: 10px 0; width: 100%; vertical-align: middle;">
        <div style="background: #262626; border-radius: 4px; height: 8px; width: 100%;">
          <div style="background: linear-gradient(90deg, #2563eb, #3b82f6); height: 8px; border-radius: 4px; width: ${percentage}%;"></div>
        </div>
      </td>
      <td style="padding: 10px 0 10px 16px; color: #fafafa; font-size: 14px; font-weight: 600; text-align: right; width: 50px; vertical-align: middle;">
        ${percentage}%
      </td>
    </tr>
  `).join('');

  // Generate top trait badges
  const topTraitBadges = topTraits.map(trait => `
    <td style="padding: 4px;">
      <div style="display: inline-block; background: #1e3a5f; color: #60a5fa; padding: 12px 20px; border-radius: 0; font-size: 14px; font-weight: 600; text-align: center;">
        ${trait}
      </div>
    </td>
  `).join('');

  // Get descriptions for top traits
  const topTraitDescriptions = topTraits.map(trait => {
    const traitData = traitScores.find(t => t.trait === trait);
    return traitData ? `
      <tr>
        <td style="padding: 16px 0; border-bottom: 1px solid #262626;">
          <div style="color: #60a5fa; font-size: 16px; font-weight: 600; margin-bottom: 8px;">${trait}</div>
          <div style="color: #a3a3a3; font-size: 14px; line-height: 1.6;">${traitData.description}</div>
        </td>
      </tr>
    ` : '';
  }).join('');

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Personality Assessment Results</title>
</head>
<body style="margin: 0; padding: 0; background-color: #0a0a0a; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #0a0a0a; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; width: 100%;">
          
          <!-- Header -->
          <tr>
            <td style="padding-bottom: 32px; border-bottom: 1px solid #262626;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <span style="font-size: 24px; color: #fafafa;">
                      <strong style="font-weight: 600;">Career</strong><em style="color: #3b82f6; font-style: italic;">stream</em>
                    </span>
                  </td>
                  <td style="text-align: right;">
                    <span style="color: #525252; font-size: 12px;">Personality Assessment Results</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Hero Title -->
          <tr>
            <td style="padding: 48px 0 32px;">
              <h1 style="margin: 0; color: #fafafa; font-size: 32px; font-weight: 600; line-height: 1.2;">
                Your Personality Profile
              </h1>
              <p style="margin: 16px 0 0; color: #a3a3a3; font-size: 16px; line-height: 1.6;">
                Based on your assessment responses, we've identified your unique personality profile. Here's what makes you stand out.
              </p>
            </td>
          </tr>
          
          <!-- Top Traits Section -->
          <tr>
            <td style="background: #121212; border: 1px solid #262626; padding: 32px;">
              <h2 style="margin: 0 0 20px; color: #fafafa; font-size: 18px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em;">
                Your Top Traits
              </h2>
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  ${topTraitBadges}
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Spacer -->
          <tr><td style="height: 24px;"></td></tr>
          
          <!-- Trait Descriptions -->
          <tr>
            <td style="background: #121212; border: 1px solid #262626; padding: 32px;">
              <h2 style="margin: 0 0 8px; color: #fafafa; font-size: 18px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em;">
                What This Means
              </h2>
              <table width="100%" cellpadding="0" cellspacing="0">
                ${topTraitDescriptions}
              </table>
            </td>
          </tr>
          
          <!-- Spacer -->
          <tr><td style="height: 24px;"></td></tr>
          
          <!-- Full Trait Breakdown -->
          <tr>
            <td style="background: #121212; border: 1px solid #262626; padding: 32px;">
              <h2 style="margin: 0 0 24px; color: #fafafa; font-size: 18px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em;">
                Full Trait Breakdown
              </h2>
              <table width="100%" cellpadding="0" cellspacing="0">
                ${traitBars}
              </table>
            </td>
          </tr>
          
          <!-- CTA Section -->
          <tr>
            <td style="padding: 48px 0; text-align: center;">
              <p style="color: #a3a3a3; font-size: 16px; margin: 0 0 24px; line-height: 1.6;">
                Ready to find roles that match your personality?
              </p>
              <a href="https://careerstream.com/signup/candidate" 
                 style="display: inline-block; background: #3b82f6; color: #ffffff; padding: 16px 40px; text-decoration: none; font-weight: 600; font-size: 16px; border-radius: 0;">
                Create Your Profile
              </a>
              <p style="color: #525252; font-size: 13px; margin: 20px 0 0;">
                Join thousands of candidates finding their perfect role match
              </p>
            </td>
          </tr>
          
          <!-- Divider -->
          <tr>
            <td style="border-top: 1px solid #262626;"></td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="padding-top: 32px; text-align: center;">
              <p style="color: #525252; font-size: 12px; margin: 0 0 8px;">
                © ${new Date().getFullYear()} Careerstream. All rights reserved.
              </p>
              <p style="color: #3d3d3d; font-size: 11px; margin: 0;">
                This email was sent because you completed a personality assessment demo.
              </p>
            </td>
          </tr>
          
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

/**
 * Generate a plain text version of the results email.
 * This is useful as a fallback for email clients that don't support HTML.
 */
export function generateResultsEmailText({ traitScores, topTraits }: EmailData): string {
  const sortedTraits = [...traitScores].sort((a, b) => b.percentage - a.percentage);
  
  const traitLines = sortedTraits
    .map(({ trait, percentage }) => `  ${trait}: ${percentage}%`)
    .join('\n');

  const topTraitDescriptions = topTraits
    .map(trait => {
      const traitData = traitScores.find(t => t.trait === trait);
      return traitData ? `${trait}\n${traitData.description}` : '';
    })
    .filter(Boolean)
    .join('\n\n');

  return `
CAREERSTREAM - Your Personality Profile
=======================================

YOUR TOP TRAITS
---------------
${topTraits.join(', ')}

WHAT THIS MEANS
---------------
${topTraitDescriptions}

FULL TRAIT BREAKDOWN
--------------------
${traitLines}

---

Ready to find roles that match your personality?
Create your profile at: https://careerstream.com/signup/candidate

© ${new Date().getFullYear()} Careerstream. All rights reserved.
  `.trim();
}

