import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, MessageCircle, BrainCircuit } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-foreground">
      {/* Hero Section */}
      <section className="w-full py-20 md:py-32 lg:py-40 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-background bg-dot-viridian/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]"></div>
        <div className="container px-4 md:px-6 z-10 relative">
          <div className="max-w-3xl mx-auto">
            <div className="mb-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              Socratic Investing, beautifully interactive.
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-foreground to-muted-foreground mb-4">
              NovaVest
            </h1>
            <div className="h-14">
              <p className="text-xl md:text-2xl text-muted-foreground typing-effect inline">
                Ask • Watch it Think • Decide
              </p>
              <span className="typing-cursor"></span>
            </div>
            <p className="max-w-[600px] mx-auto text-muted-foreground/80 md:text-xl mt-6">
              An AI-powered partner to refine your investment strategy through
              thought-provoking conversation and analysis.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-primary hover:bg-accent">
                <Link href="/chat">Start Your Analysis</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-card/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                A New Paradigm in Investment Analysis
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                NovaVest isn&apos;t just another tool. It&apos;s a Socratic
                partner designed to challenge your assumptions and deepen your
                insights.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 mt-12">
            <FeatureCard
              icon={<MessageCircle className="h-8 w-8 text-primary" />}
              title="Streaming Chat"
              description="Engage in a real-time, streaming conversation. Get instant feedback and analysis as you type."
            />
            <FeatureCard
              icon={<BrainCircuit className="h-8 w-8 text-primary" />}
              title="'Thinking' Process"
              description="See the AI's thought process live with our unique shimmer effect for deeper transparency. (Runs On 2v CPU no Expensive GPU Required)"
            />
            <FeatureCard
              icon={<CheckCircle className="h-8 w-8 text-primary" />}
              title="Socratic Method"
              description="The AI asks clarifying questions to help you uncover blind spots and refine your investment thesis."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Card className="bg-card border-border/50 hover:border-primary/50 transition-colors duration-300 h-full">
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        {icon}
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
