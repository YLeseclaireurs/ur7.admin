import "vditor/dist/index.css";
import * as React from "react";
import Vditor from "vditor";

const DocsPage = () => {
    const [vd, setVd] = React.useState<Vditor>();

    React.useEffect(() => {
        const vditor = new Vditor("vditor", {
            after: () => {
                vditor.setValue("`Vditor` 最小代码示例");
                setVd(vditor);
            }
        });
    }, []);
    return <div id="vditor" className="vditor" />;
};

export default DocsPage;
