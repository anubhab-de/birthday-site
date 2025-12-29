import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access a non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted px-4">
      <div className="max-w-xl text-center">
        <h1 className="mb-4 text-5xl font-bold">404</h1>

        <p className="mb-6 text-lg text-muted-foreground">
          Haha… boom! 😄
          You took a wrong turn.
        </p>

        <p className="mb-6 text-base text-muted-foreground">
          And tell me, Anubhab — how long did it take you to reach this message?
        </p>

        <div className="mb-8 rounded-lg bg-background p-6 shadow">
          <p className="mb-2 font-medium">This is a personal letter for you:</p>

          <p className="whitespace-pre-line text-muted-foreground">
            We lost time for reasons that didn’t matter in the end.
            What matters is that you’re my brother, today and always.
            I’m proud of the engineer you’re becoming.
            No matter where life takes us, I’m here.
            {"\n\n"}
          </p>
          <p className="whitespace-pre-line text-muted-foreground">
            For family reasons, we were separated for a long time.
            But I want you to know something clearly — I never hated you.

            {"\n\n"}I don’t know if you ever felt hurt, distant, or upset because of me,
            and if you did, I am truly sorry.

            {"\n\n"}You are my only brother.
            And in those earlier days, you were also my closest friend —
            the one who made me happy when things felt lighter.

            {"\n\n"}I also want to say this with honesty:
            if any decisions made by our parents caused you pain,
            I’m sorry for that too — even though they were not mine.

            {"\n\n"}A lot has changed now.
            Life is different, and we’ve both grown.

            {"\n\n"}But one thing hasn’t changed —
            I will always be here for you.
          </p>

        </div>

        <a
          href="/"
          className="text-primary underline underline-offset-4 hover:text-primary/90"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
