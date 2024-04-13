import { FaqType } from "@/types/types";
import { Collapse } from "react-collapse";

interface Props {
    collapsed: number | null;
    data: FaqType;
    index: number;
    handler: (id: number | null) => void;
}

export default function FaqCollapse({
    collapsed,
    handler,
    index,
    data,
}: Props) {
    return (
        <>
            <h4
                onClick={() => handler(index)}
                className={`accordion-title ${
                    collapsed === index ? "open" : ""
                }`}
            >
                {data.title}
            </h4>
            <Collapse isOpened={collapsed === index}>
                <div className="accordion-content">
                    <p>{data.description}</p>
                </div>
            </Collapse>
        </>
    );
}
