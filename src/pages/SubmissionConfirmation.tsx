import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import Navbar from "@/components/landing/Navbar";

const SubmissionConfirmation = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center section-padding">
        <div className="max-w-lg text-center">
          <div className="flex justify-center mb-8">
            <CheckCircle className="w-16 h-16 text-brij-orange" />
          </div>
          <h1 className="editorial-subheading mb-4">Application Submitted</h1>
          <p className="body-large text-muted-foreground mb-4">
            Thank you for applying to THE BRIJ Cultural Leaders Fellowship. 
            Your application is now under review by the selection committee 
            at Serendipity Arts.
          </p>
          <p className="text-sm text-muted-foreground mb-4">
            Please note that submitting an application does not guarantee selection. 
            All applications are reviewed on merit, alignment with programme goals, 
            and cohort composition.
          </p>
          <p className="text-sm text-muted-foreground mb-12">
            The status of your application will be reflected on your dashboard. 
            A confirmation email has been sent to your registered email address.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/dashboard"
              className="inline-flex items-center justify-center bg-foreground text-background px-6 py-3 font-semibold tracking-wide text-sm hover:opacity-90 transition-opacity"
            >
              View Dashboard
            </Link>
            <Link
              to="/"
              className="inline-flex items-center justify-center text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Return to Homepage
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SubmissionConfirmation;
