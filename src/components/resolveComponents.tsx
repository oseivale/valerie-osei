import ContentCard from "./ContentCard";
import TESTProgressBar from "./ProgressBar";
import TextWithCTA from "./TextWithCTA";

export function resolveComponents(contentType: string, content: any) {
  console.log("----hi9999----", content.fields.image);
  switch (contentType) {
    case "textWithCta":
      return (
        <TextWithCTA
          description={content.fields.description}
          ctas={content.fields.ctas}
        />
      );
    case "progressBarWrapper":
      return (
        <div>
          {content.fields.progressBars.map((bar: any) => {
            return (
              <TESTProgressBar
                key={bar.sys.id}
                color={bar.fields.color}
                value={bar.fields.percentageValue * 100}
                max={bar.fields.maxValue}
                label={bar.fields.label}
                textClass=""
                skillName={bar.fields.label}
              />
            );
          })}
        </div>
      );
    case "contentCard":
      // header, subheader, image, ctas
      return (
        <ContentCard
          header={content?.fields?.header}
          subheader={content?.fields?.subheader}
          ctas={content?.fields?.ctas}
          description={content?.fields?.description}
          cardClass={content?.fields?.customClass}
          image={content?.fields?.image ? content?.fields?.image : null}
        />
      );
    default:
      break;
  }
}
