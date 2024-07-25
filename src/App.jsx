import "./App.css";

const App = () => {
  const keywords = [
    "# Web 前端",
    "# INFJ",
    "# 排球",
    "# 桌球",
    "# 狗派",
    "# 獨立音樂",
    "# KPOP",
    "# 現場表演",
    "# 電影",
  ];

  return (
    <div className="landingPage">
      <div className="pacman-container">
        <svg className="pacman">
          <circle cx="50" cy="50" r="25" />
        </svg>
        <svg className="eye">
          <circle cx="6" cy="6" r="6" />
        </svg>
        <div className="keywords-container">
          {keywords.map((keyword, index) => (
            <div
              className="keyword"
              key={keyword}
              style={{ animationDelay: `${index * 5.5}s` }}
            >
              {keyword}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
