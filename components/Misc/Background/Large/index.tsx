type BackgroundPropsType = {
  color?: string;
};

const LargeBackground = (props: BackgroundPropsType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{ minHeight: 'inherit' }}
      fill="none"
      viewBox="0 0 1440 360"
    >
      <path fill={props?.color || '#FC8108'} d="M0 0H1440V360H0z"></path>
      <g
        style={{ mixBlendMode: 'multiply' }}
        fill={props?.color || '#FC8108'}
        fillOpacity="0.4"
        fillRule="evenodd"
        clipRule="evenodd"
      >
        <path d="M1183.11 219.843l52.62 94.787 30.94-17.642-53.19-95.8c-6.49 10.42-17.58 17.61-30.37 18.655z"></path>
        <path d="M1162.24 215.801v109.622h35.5V215.682a39.128 39.128 0 01-17.86 4.292c-6.34 0-12.32-1.502-17.64-4.173z"></path>
        <path d="M1176.87 219.859c-12.81-.972-23.93-8.101-30.48-18.475l-53.07 95.603 30.94 17.642 52.61-94.77z"></path>
        <path d="M1158.11 213.398c-10.06-6.69-16.94-17.885-17.85-30.755l-.16-.255-93.74 58.42 18.59 30.648 93.16-58.058z"></path>
        <path d="M1144.33 161.723H1038v35.978h106.33c-2.68-5.414-4.18-11.524-4.18-17.99 0-6.465 1.5-12.574 4.18-17.988z"></path>
        <path d="M1046.36 118.614l18.59-30.647 93.16 58.057c-10.06 6.691-16.94 17.885-17.86 30.755l-.15.256-93.74-58.421z"></path>
        <path d="M1093.32 62.435l30.94-17.642 52.61 94.769c-12.81.973-23.93 8.102-30.48 18.476l-53.07-95.603z"></path>
        <path d="M1197.74 34h-35.5v109.623a39.157 39.157 0 0117.64-4.174c6.42 0 12.49 1.546 17.86 4.292V34z"></path>
        <path d="M1266.67 62.435l-30.94-17.642-52.62 94.787c12.79 1.045 23.88 8.235 30.37 18.655l53.19-95.8z"></path>
        <path d="M1313.63 118.614l-18.6-30.647-93.28 58.133c9.89 6.622 16.68 17.602 17.72 30.24l.42.695 93.74-58.421z"></path>
        <path d="M1215.43 197.701c2.67-5.414 4.17-11.524 4.17-17.99 0-6.465-1.5-12.574-4.17-17.988h106.56v35.978h-106.56z"></path>
        <path d="M1201.76 213.323l93.27 58.133 18.6-30.648-93.74-58.42-.42.695c-1.04 12.637-7.83 23.618-17.71 30.24z"></path>
      </g>
      <g
        style={{ mixBlendMode: 'multiply' }}
        fill={props?.color || '#FC8108'}
        fillOpacity="0.3"
        fillRule="evenodd"
        clipRule="evenodd"
      >
        <path d="M313.975 160.794l33.352 60.079 19.609-11.182-33.709-60.721c-4.117 6.605-11.142 11.162-19.252 11.824z"></path>
        <path d="M300.75 158.232v69.48h22.5v-69.556a24.792 24.792 0 01-11.324 2.721c-4.014 0-7.809-.952-11.176-2.645z"></path>
        <path d="M310.019 160.804c-8.119-.616-15.164-5.135-19.316-11.71l-33.639 60.596 19.609 11.182 33.346-60.068z"></path>
        <path d="M298.131 156.709a25.566 25.566 0 01-11.318-19.493l-.098-.162-59.416 37.029 11.785 19.425 59.047-36.799z"></path>
        <path d="M289.394 123.954H222v22.804h67.393a25.685 25.685 0 01-2.647-11.401c0-4.098.954-7.971 2.648-11.403z"></path>
        <path d="M227.298 96.632l11.785-19.426 59.047 36.799a25.564 25.564 0 00-11.318 19.494l-.098.161-59.416-37.028z"></path>
        <path d="M257.064 61.024l19.609-11.182 33.346 60.068c-8.119.616-15.164 5.135-19.316 11.71l-33.639-60.596z"></path>
        <path d="M323.25 43h-22.5v69.482a24.809 24.809 0 0111.177-2.645c4.072 0 7.919.98 11.323 2.72V43z"></path>
        <path d="M366.936 61.024l-19.609-11.182-33.352 60.079c8.11.662 15.135 5.219 19.253 11.824l33.708-60.721z"></path>
        <path d="M396.702 96.632l-11.785-19.426-59.123 36.846a25.567 25.567 0 0111.225 19.168l.267.44 59.416-37.028z"></path>
        <path d="M334.459 146.758a25.698 25.698 0 002.646-11.401c0-4.098-.953-7.971-2.647-11.403H402v22.804h-67.541z"></path>
        <path d="M325.793 156.662l59.124 36.846 11.785-19.425-59.416-37.029-.267.44a25.565 25.565 0 01-11.226 19.168z"></path>
      </g>
    </svg>
  );
};

export default LargeBackground;
