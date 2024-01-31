import React, { FC, ReactElement } from 'react';

const commonStyle = (width?: string) => ({ width: width || "25px", cursor: "pointer" });

export const CustomSearchIcon: FC<{ width?: string, children?: ReactElement }> = ({ width, children }) => {
    return <svg style={commonStyle(width)} focusable="false" viewBox="0 0 24 24">
        <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
            {children}
        </path>
    </svg>
};

export const CustomMoreVerticalIcon: FC<{ width?: string, children?: ReactElement }> = ({ width, children }) => {
    return <svg style={commonStyle(width)} focusable="false" viewBox="0 0 24 24">
        <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z">
            {children}
        </path>
    </svg>
};

export const CustomUnsaveIcon: FC<{ width?: string, children?: ReactElement }> = ({ width, children }) => {
    return <svg style={commonStyle(width)} focusable="false" viewBox="0 0 24 24">
        <path d="M21 7h-6V5h6v2zm-2 3.9c-.32.07-.66.1-1 .1-2.76 0-5-2.24-5-5 0-1.13.37-2.16 1-3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V10.9z">
            {children}
        </path>
    </svg>
};

export const CustomHideImageIcon: FC<{ width?: string, children?: ReactElement }> = ({ width, children }) => {
    return <svg style={commonStyle(width)} focusable="false" viewBox="0 0 24 24">
        <path d="M21 5c0-1.1-.9-2-2-2H5.83L21 18.17V5zM2.81 2.81 1.39 4.22 3 5.83V19c0 1.1.9 2 2 2h13.17l1.61 1.61 1.41-1.41L2.81 2.81zM6 17l3-4 2.25 3 .82-1.1 2.1 2.1H6z">
            {children}
        </path>
    </svg>
};

export const CustomDeleteIcon: FC<{ width?: string, children?: ReactElement }> = ({ width, children }) => {
    return <svg style={commonStyle(width)} focusable="false" viewBox="0 0 24 24">
        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z">
            {children}
        </path>
    </svg>
};

export const CustomNotInterestedIcon: FC<{ width?: string, children?: ReactElement }> = ({ width, children }) => {
    return <svg style={commonStyle(width)} focusable="false" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z">
            {children}
        </path>
    </svg>
};

export const CustomDownloadIcon: FC<{ width?: string, children?: ReactElement }> = ({ width, children }) => {
    return <svg style={commonStyle(width)} focusable="false" viewBox="0 0 24 24">
        <path d="M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z">
            {children}
        </path>
    </svg>
};

export const CustomArrowBackIcon: FC<{ width?: string, children?: ReactElement }> = ({ width, children }) => {
    return <svg style={commonStyle(width)} focusable="false" viewBox="0 0 24 24">
        <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z">
            {children}
        </path>
    </svg>
};

export const CustomBookmarkIcon: FC<{ width?: string, children?: ReactElement }> = ({ width, children }) => {
    return <svg style={commonStyle(width)} focusable="false" viewBox="0 0 24 24">
        <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z">
            {children}
        </path>
    </svg>
};

export const CustomFilledBookmarkIcon: FC<{ width?: string, children?: ReactElement }> = ({ width, children }) => {
    return <svg style={commonStyle(width)} focusable="false" viewBox="0 0 24 24">
        <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15-5-2.18L7 18V5h10v13z">
            {children}
        </path>
    </svg>
};

export const CustomDateIcon: FC<{ width?: string, children?: ReactElement }> = ({ width, children }) => {
    return <svg style={commonStyle(width)} focusable="false" viewBox="0 0 24 24">
        <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z">
            {children}
        </path>
    </svg>
};

export const CustomStarIcon: FC<{ width?: string, children?: ReactElement }> = ({ width, children }) => {
    return <svg style={commonStyle(width)} focusable="false" viewBox="0 0 24 24">
        <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
            {children}
        </path>
    </svg>
};

export const CustomLikeIcon: FC<{ width?: string, children?: ReactElement }> = ({ width, children }) => {
    return <svg style={commonStyle(width)} focusable="false" viewBox="0 0 24 24">
        <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z">
            {children}
        </path>
    </svg>
};

export const CustomShareIcon: FC<{ width?: string, children?: ReactElement }> = ({ width, children }) => {
    return <svg style={{ width: width || "25px", transform: "scale(-1, 1)" }} focusable="false" viewBox="0 0 24 24">
        <path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z">
            {children}
        </path>
    </svg>
};

export const CustomFilledLikeIcon: FC<{ width?: string, children?: ReactElement }> = ({ width, children }) => {
    return <svg style={{ width: width || "25px", fill: "red" }} focusable="false" viewBox="0 0 24 24">
        <path d="m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z">
            {children}
        </path>
    </svg>
};

export const CustomClearIcon: FC<{ width?: string, children?: ReactElement }> = ({ width, children }) => {
    return <svg style={commonStyle(width)} focusable="false" viewBox="0 0 24 24">
        <path d="M495.1 351.1c-44.18 0-79.1 35.72-79.1 79.91c0 44.18 35.82 80.09 79.1 80.09s79.1-35.91 79.1-80.09C575.1 387.7 540.2 351.1 495.1 351.1zM242.7 216.4c-30.16 0-102.9 4.15-149.4 41.34c-22 17.5-40.25 55.75-54.63 97.5l60.38-22.12c.7363-.2715 1.46-.3967 2.151-.3967c3.33 0 5.935 2.885 5.935 6.039c0 1.301-.4426 2.647-1.462 3.856L11 454.7C3.75 487.1 0 510.2 0 510.2S27.07 512 64.45 512c65.94 0 163.1-5.499 202.2-35.89c60-47.75 76.63-150.1 76.63-150.1l-86.75-109.2C256.5 216.7 251.4 216.4 242.7 216.4zM607.1 .0074c-6.863 0-13.78 2.192-19.62 6.719L362.7 182.3l-29.88-37.67c-3.248-4.094-7.892-6.058-12.5-6.058c-5.891 0-11.73 3.204-14.54 9.26L283.8 195.1l86.75 109.1l50.88-10.72c7.883-1.66 12.72-8.546 12.72-15.71c0-3.412-1.096-6.886-3.478-9.89l-28.16-35.5l225.2-175.2c8.102-6.312 12.35-15.75 12.35-25.29C640 14.94 626.3 .0074 607.1 .0074z">
            {children}
        </path>
    </svg>
};

export const CustomBlockIcon: FC<{ width?: string, children?: ReactElement }> = ({ width, children }) => {
    return <svg style={commonStyle(width)} focusable="false" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z">
            {children}
        </path>
    </svg>
};

export const CustomSettingsIcon: FC<{ width?: string, children?: ReactElement }> = ({ width, children }) => {
    return <svg style={commonStyle(width)} focusable="false" viewBox="0 0 24 24">
        <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z">
            {children}
        </path>
    </svg>
};

export const CustomSendIcon: FC<{ width?: string, children?: ReactElement }> = ({ width, children }) => {
    return <svg style={commonStyle(width)} focusable="false" viewBox="0 0 24 24">
        <path d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2z">
            {children}
        </path>
    </svg>
};

export const CustomHomeIcon: FC<{ width?: string, children?: ReactElement }> = ({ width, children }) => {
    return <svg style={commonStyle(width)} focusable="false" viewBox="0 0 24 24">
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z">
            {children}
        </path>
    </svg>
};

export const CustomAddIcon: FC<{ width?: string, children?: ReactElement }> = ({ width, children }) => {
    return <svg style={commonStyle(width)} focusable="false" viewBox="0 0 24 24">
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z">
            {children}
        </path>
    </svg>
};

export const CustomEditIcon: FC<{ width?: string, children?: ReactElement }> = ({ width, children }) => {
    return <svg style={commonStyle(width)} focusable="false" viewBox="0 0 24 24">
        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z">
            {children}
        </path>
    </svg>
};

export const CustomUploadIcon: FC<{ width?: string, children?: ReactElement }> = ({ width, children }) => {
    return <svg style={commonStyle(width)} focusable="false" viewBox="0 0 24 24">
        <path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z">
            {children}
        </path>
    </svg>
};

export const CustomCommentsIcon: FC<{ width?: string, children?: ReactElement }> = ({ width, children }) => {
    return <svg style={commonStyle(width)} focusable="false" viewBox="0 0 24 24">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z">
            {children}
        </path>
    </svg>
};

export const CustomBroomIcon: FC<{ width?: string, children?: ReactElement }> = ({ width, children }) => {
    return <svg style={commonStyle(width)} focusable="false" viewBox="0 0 24 24">
        <path d="M22.4524 1.92267C22.7452 2.21557 22.7452 2.69044 22.4524 2.98333L15.5238 9.91189C17.2589 12.1667 17.0935 15.4132 15.0277 17.479L14.1963 18.3105L11.4091 22.4912C11.2845 22.6782 11.0826 22.7994 10.859 22.8215C10.6354 22.8437 10.4136 22.7644 10.2548 22.6055L1.76948 14.1202C1.6106 13.9614 1.53132 13.7396 1.55346 13.516C1.5756 13.2924 1.69683 13.0905 1.88378 12.9659L6.06475 10.1786L6.89601 9.3473C8.96179 7.28152 12.2083 7.11617 14.4631 8.85123L21.3917 1.92267C21.6846 1.62978 22.1595 1.62978 22.4524 1.92267ZM7.60312 10.7615L13.6135 16.7719L13.9671 16.4184C15.6268 14.7586 15.6268 12.0677 13.9671 10.408C12.3074 8.74823 9.6164 8.74823 7.95668 10.408L7.60312 10.7615ZM6.44689 11.7266L3.47704 13.7065L10.6685 20.898L12.6484 17.9281L6.44689 11.7266Z">
            {children}
        </path>
    </svg>
};

export const CustomShowImageIcon: FC<{ width?: string, children?: ReactElement }> = ({ width, children }) => {
    return <svg style={commonStyle(width)} focusable="false" viewBox="0 0 24 24">
        <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z">
            {children}
        </path>
    </svg>
};

export const CustomListIcon: FC<{ width?: string, children?: ReactElement }> = ({ width, children }) => {
    return <svg style={commonStyle(width)} focusable="false" viewBox="0 0 24 24">
        <path d="M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z">
            {children}
        </path>
    </svg>
};

export const CustomAccountCircle: FC<{ width?: string, children?: ReactElement }> = ({ width, children }) => {
    return <svg style={commonStyle(width)} focusable="false" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z">
            {children}
        </path>
    </svg>
};

export const CustomArrowOutwardIcon: FC<{ width?: string, children?: ReactElement }> = ({ width, children }) => {
    return <svg style={{width: width || "25px", cursor: "pointer", transform: "rotate(-45deg)"}} focusable="false" viewBox="0 0 24 24">
        <path d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z">
            {children}
        </path>
    </svg>
};