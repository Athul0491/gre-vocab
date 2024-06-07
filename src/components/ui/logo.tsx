const Logo = () => {
  return (
    <svg
      width="200"
      height="60"
      viewBox="0 0 200 60"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Crush GRE"
    >
      {/* Define the font style */}
      <defs>
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');
          `}
        </style>
      </defs>

      {/* Render the text with specific font */}
      <text
        x="10"
        y="40"
        fontFamily="'Poppins', sans-serif"
        fontSize="30"
        fontWeight="600"
        fill="#1F2937"
      >
        Crush GRE
      </text>
    </svg>
  );
};

export default Logo;
