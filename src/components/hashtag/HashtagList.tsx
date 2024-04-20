import HashtagItem from "./HashtagItem";

type HashtagListPropsTypes = {
  companyList: string[];
  handleSelectedCompany: (company: string) => void;
};

export default function HashtagList({
  companyList,
  handleSelectedCompany,
}: HashtagListPropsTypes) {
  return (
    <ul className="hashtags">
      {companyList.map((company: string) => (
        <HashtagItem
          onSelectCompany={handleSelectedCompany}
          key={company}
          company={company}
        />
      ))}
    </ul>
  );
}
