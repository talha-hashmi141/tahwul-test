import type { DetailsData } from "@/types";

export const detailsData: DetailsData = {
  id: "1",
  category: "Strategy & Planning",
  title: "Digital Transformation Strategic Planning",
  progress: 100,
  evidenceStats: [
    { id: "1", count: 4, label: "Total Evidence", status: "total" },
    { id: "2", count: 3, label: "Under Review Evidence", status: "under-review" },
    { id: "3", count: 2, label: "In Progress Evidence", status: "in-progress" },
    { id: "4", count: 1, label: "Completed Evidence", status: "completed" },
  ],
  sections: [
    {
      id: "objective",
      title: "Objective",
      content: "Develop A Digital Transformation Strategy Aligned With The Organization's Strategy And The Objectives Of Saudi Vision 2030.",
      type: "text",
    },
    {
      id: "implementation-requirements",
      title: "Implementation Requirements",
      content: [
        "Prepare A Digital Transformation Strategy For The Transition To Electronic Government Transactions, Including The Following:",
        "A. The Organization's Vision, Mission, Strategic Pillars, And Strategic Objectives, And Their Alignment With The Organization's Overall Strategy.",
        "B. Strategic Initiatives, Programs, And Performance Indicators.",
        "C. A Clear Methodology For Integration And Coordination With Relevant External Entities To Achieve The Strategy's Objectives.",
        "D. Required Competencies, Capabilities, And Skills Necessary To Achieve The Strategy's Objectives.",
      ],
      type: "list",
    },
    {
      id: "evidence-documents",
      title: "Evidence Documents",
      content:
        "Submit The Approved Digital Transformation Strategy That Includes All The Requirements Of This Standard, Provided That It Has Been Approved Within A Period Not Exceeding 36 Months.",
      type: "text",
    },
    {
      id: "related-regulations",
      title: "Related Regulations",
      content: "Council Of Ministers Resolution No. (40) Dated 27/2/1427H, Clause (16).",
      type: "text",
    },
    {
      id: "scope",
      title: "Scope",
      content: "All Government Entities.",
      type: "text",
    },
  ],
  leaders: [
    {
      id: "1",
      name: "Ahmed Al-Ali",
      role: "Strategy Perspective",
      score: "",
      avatar: "/avatars/mohammad.png",
    },
    {
      id: "2",
      name: "Ahmed Al-Ali",
      role: "Strategy Perspective",
      score: "",
      avatar: "/avatars/sarah.png",
    },
  ],
  evidenceDocuments: [
    {
      id: "1",
      number: "5.4.1.1",
      name: "Digital_Transformation_Plan.Pdf",
      lead: "Ahmed Khaled",
      preparer: "Ahmed Khaled",
      date: "2025-08-01",
      dueDate: "2025-08-01",
      status: "Approved",
    },
    {
      id: "2",
      number: "5.4.1.2",
      name: "KPI_Framework.Xlsx",
      lead: "Mona Hamed",
      preparer: "Mona Hamed",
      date: "2025-08-01",
      dueDate: "2025-08-01",
      status: "Pending Review",
    },
    {
      id: "3",
      number: "5.4.1.3",
      name: "Roadmap_Version1.Docx",
      lead: "Rami AlSharif",
      preparer: "Rami AlSharif",
      date: "2025-08-01",
      dueDate: "2025-08-01",
      status: "Pending Review",
    },
  ],
  comments: [
    {
      id: "1",
      user: { name: "Sara Ibrahim" },
      text: "Ensure The Plan Includes A Clear Governance Model.",
      timestamp: "2025-08-05",
    },
    {
      id: "2",
      user: { name: "Mona Hamed" },
      text: "Ensure The Plan Includes A Clear Governance Model.",
      timestamp: "2025-08-05",
    },
  ],
  evidenceActivities: [
    { id: "1", text: "Roadmap_Version1.Docx Uploaded By Rami AlSharif", user: "Rami AlSharif", time: "5 Mins Ago", type: "upload" },
    { id: "2", text: "KPI_Framework.Xlsx Uploaded By Mona Hamed", user: "Mona Hamed", time: "20 Mins Ago", type: "upload" },
    { id: "3", text: "Digital_Transformation_Plan.Pdf Approved By Advisory Team", user: "Advisory Team", time: "1 Hour Ago", type: "approval" },
  ],
};

export function getDetails(): DetailsData {
  return detailsData;
}
