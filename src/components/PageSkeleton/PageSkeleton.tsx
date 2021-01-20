import React from "react";
import { SkeletonParagraph } from "./style";

const skeletonParagraphRows = { rows: 4 };

const PageSkeleton = (): JSX.Element => (
  <>
    <SkeletonParagraph active paragraph={skeletonParagraphRows} />
    <SkeletonParagraph active paragraph={skeletonParagraphRows} />
    <SkeletonParagraph active paragraph={skeletonParagraphRows} />
  </>
);

export default PageSkeleton;
