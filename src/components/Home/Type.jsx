import Typewriter from "typewriter-effect"

export default function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "BTech CSE Student At Graphic Era Hill University",
          "Student Developer",
          "Enthusiastic Coder",
          "Aspiring Software Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 30,
        cursor: "▋",
        cursorClassName: "text-indigo-400"
      }}
    />
  )
}