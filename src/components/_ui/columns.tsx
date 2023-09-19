import { ReactNode } from "react";

export const Column3_6: React.FC<{ children: ReactNode }> = ({
    children
}) =>
<div className="col-3 md-6">
    { children }
</div>

export const Column9: React.FC<{ children: ReactNode }> = ({
    children
}) =>
<div className="col-9">
    { children }
</div>