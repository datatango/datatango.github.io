import { lazy, Suspense } from "react";

const Viewer = lazy(() => import("@samvera/clover-iiif/viewer"));

export default function CloverViewer({ iiifContent, ...props }) {
  return (
    <Suspense fallback={null}>
      <Viewer iiifContent={iiifContent} {...props} />
    </Suspense>
  );
}
