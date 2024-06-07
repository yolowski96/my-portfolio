import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `TextCertificate`.
 */
export type TextCertificateProps =
  SliceComponentProps<Content.TextCertificateSlice>;

/**
 * Component for "TextCertificate" Slices.
 */
const TextCertificate = ({ slice }: TextCertificateProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="max-w-prose">
        <PrismicRichText field={slice.primary.text} />
      </div>

    </section>
  );
};

export default TextCertificate;
