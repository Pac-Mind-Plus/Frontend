// import LoaderContext, {
//     LoaderStatus,
// } from "@/components/contexts/Loadercontext";
import { useTheme } from "@mui/material";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import {
    CSSProperties,
    PropsWithChildren,
    forwardRef,
    useContext,
} from "react";

type PropsType = {
    key?: string;
    href: string;
    id?: string;
    className?: string;
    variant?: "grid" | "link" | "container";
    target?: string;
    style?: CSSProperties;
} & PropsWithChildren;

const CustomLink = forwardRef((props: PropsType, ref: any) => {
    const { key, href, id, target, className, variant, children, style } =
        props;

    const theme = useTheme();
    // const loaderContext = useContext(LoaderContext);
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const getVariant = (): CSSProperties => {
        switch (variant) {
            case "grid":
                return {
                    textDecoration: "none",
                    color: theme.palette.primary.main,
                };
            case "container":
                return {
                    textDecoration: "none",
                    color: "inherit",
                };
            default:
                return {
                    fontWeight: 500,
                    wordBreak: "break-word",
                    textAlign: "left",
                    textDecoration: "none",
                    color: theme.palette.primary.main,
                };
        }
    };

    const formatPath = (path: string): string => {
        let trimmedPath = path.trim();
        if (trimmedPath[trimmedPath.length - 1] === "/") {
            trimmedPath = trimmedPath.slice(0, trimmedPath.length - 1);
        }

        return trimmedPath;
    };

    return (
        <Link
            {...props}
            ref={ref}
            key={key}
            target={target}
            style={{
                ...getVariant(),
                ...style,
            }}
            onClick={(e) => {
                e.stopPropagation();

                if (
                    formatPath(href) !==
                    formatPath(
                        `${pathname}${
                            searchParams.keys.length > 0 ? "?" : ""
                        }${searchParams}`,
                    )
                ) {
                    // loaderContext.setLoadingStatus(LoaderStatus.LOADING);
                }
            }}
            className={className}
            id={id}
            href={href}
        >
            {children}
        </Link>
    );
});

export default CustomLink;
