import { getDetails } from "@/data/details";
import { PageHeader } from "@/components/details/PageHeader";
import { EvidenceSummary } from "@/components/details/EvidenceSummary";
import { ContentSection } from "@/components/details/ContentSection";
import { LeadersSection } from "@/components/details/LeadersSection";
import { EvidenceTable } from "@/components/details/EvidenceTable";
import { CommentsSection } from "@/components/details/CommentsSection";
import { EvidenceActivities } from "@/components/details/EvidenceActivities";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/Tabs";
import { Card } from "@/components/ui/Card";

export default async function DigitalTransformationPage() {
  const data = getDetails();

  return (
    <div className="flex flex-col gap-4 md:gap-6">
      <PageHeader title={data.title} category={data.category} progress={data.progress} />

      <EvidenceSummary stats={data.evidenceStats} />

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="bg-gray-200 p-1 rounded-lg mb-4 md:mb-6">
          <TabsTrigger value="overview" className="px-6 py-2 text-sm">
            Overview
          </TabsTrigger>
          <TabsTrigger value="evidence" className="px-6 py-2 text-sm">
            Evidence
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="flex flex-col gap-6">
          <Card className="p-6 bg-white border border-gray-100 rounded-xl">
            {data.sections.map(section => (
              <ContentSection key={section.id} section={section} />
            ))}
          </Card>

          <LeadersSection leaders={data.leaders} />
        </TabsContent>

        <TabsContent value="evidence">
          <div className="space-y-6">
            {/* Evidence Table - Full Width */}
            <EvidenceTable documents={data.evidenceDocuments || []} />

            {/* Comments and Recent Activities - Side by Side */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <CommentsSection comments={data.comments || []} />
              </div>
              <div className="lg:col-span-1">
                <EvidenceActivities activities={data.evidenceActivities || []} />
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
