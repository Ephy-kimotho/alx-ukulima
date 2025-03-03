import { CompanyInfoProps } from "@/interfaces";

function CompanyInfo({ Icon, title, text }: CompanyInfoProps) {
  return (
    <article className="flex gap-6 mb-4 text-white">
      <Icon size={30} color="#ffffff" strokeWidth={2} />

      <div className="space-y-2">
        <p className="font-bold">{title}</p>
        <p className="text-sm">{text}</p>
      </div>
    </article>
  );
}

export default CompanyInfo;
