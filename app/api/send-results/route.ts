import { Resend } from "resend";
import { generateResultsEmailHtml, generateResultsEmailText } from "@/lib/emails/personality-results";
import { PersonalityTrait } from "@/lib/personality/questions";
import { TraitScore } from "@/lib/personality/scoring";

// Request body type
interface SendResultsRequest {
  email: string;
  traitScores: TraitScore[];
  topTraits: PersonalityTrait[];
}

export async function POST(req: Request) {
  try {
    // Parse request body
    const body = await req.json() as SendResultsRequest;
    const { email, traitScores, topTraits } = body;

    // Validate required fields
    if (!email || !traitScores || !topTraits) {
      return Response.json(
        { error: "Missing required fields: email, traitScores, topTraits" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        { error: "Invalid email address format" },
        { status: 400 }
      );
    }

    // Validate trait scores
    if (!Array.isArray(traitScores) || traitScores.length === 0) {
      return Response.json(
        { error: "traitScores must be a non-empty array" },
        { status: 400 }
      );
    }

    // Validate top traits
    if (!Array.isArray(topTraits) || topTraits.length === 0) {
      return Response.json(
        { error: "topTraits must be a non-empty array" },
        { status: 400 }
      );
    }

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      return Response.json(
        { error: "Email service is not configured" },
        { status: 500 }
      );
    }

    // Initialize Resend client (done here to avoid build-time errors)
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Generate email content
    const htmlContent = generateResultsEmailHtml({ traitScores, topTraits });
    const textContent = generateResultsEmailText({ traitScores, topTraits });

    // Send email using Resend
    // Note: Using Resend's onboarding address until domain is verified
    // To send from your own domain, verify it at https://resend.com/domains
    const fromAddress = process.env.RESEND_FROM_EMAIL || "Careerstream <onboarding@resend.dev>";
    
    const { data, error } = await resend.emails.send({
      from: fromAddress,
      to: [email],
      subject: "Your Personality Assessment Results - Careerstream",
      html: htmlContent,
      text: textContent,
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json(
        { error: "Failed to send email", details: error.message },
        { status: 500 }
      );
    }

    return Response.json({
      success: true,
      message: "Results sent successfully",
      data: { id: data?.id },
    });
  } catch (error) {
    console.error("Send results error:", error);
    return Response.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}

// Handle unsupported methods
export async function GET() {
  return Response.json(
    { error: "Method not allowed" },
    { status: 405 }
  );
}

