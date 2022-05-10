import {
  CalendarIcon,
  ChartBarIcon,
  EmojiHappyIcon,
  PhotographIcon,
  XIcon,
} from "@heroicons/react/outline";
import { useRef, useState, useEffect } from "react";

function Input() {
  const [input, setInput] = useState("");
  const [showEmojis, setShowEmojis] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const filePickerRef = useRef(null);

  const addImagetoCreet = () => {
    console.log("tanga.");
  };
  return (
    <div className={`border-b border-gray-900 p-3 flex space-x-3`}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg/1200px-Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg"
        alt="profile pic"
        className="h-11 w-11 rounded-full cursor-pointer"
      />
      <div className="w-full divide-y divide-gray-700">
        <div className={``}>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="overflow-hidden bg-transparent text-lg placeholder-gray-500 tracking-wide outline-none text-[#d9d9d9] w-full min-h-[55px]"
            placeholder="How are you?"
            rows="2"
          ></textarea>

          {selectedFile && (
            <div className="relative">
              <div
                className="absolute w-8 h-8 bg-[#15181c] hover:bg-[#272c26] bg-opacity-75 rounded-full flex items-center justify-center top-1 left-1 cursor-pointer"
                onClick={() => setSelectedFile(null)}
              >
                <XIcon className="text-white h-5" />
              </div>
              <img
                src={selectedFile}
                alt=""
                className="rounded-2xl max-h-80 object-contain"
              />
            </div>
          )}
        </div>

        <div className="flex items-center justify-between pt-2.5">
          <div className="flex items-center">
            <div className="icon" onClick={() => filePickerRef.current.click()}>
              <PhotographIcon className="h-[22px] text-[#6f1dc6]" />
              <input
                type="file"
                hidden
                onChange={addImagetoCreet}
                ref={filePickerRef}
              />
            </div>

            <div className="icon rotate-90">
              <ChartBarIcon className="h-[22px] text-[#6f1dc6]" />
            </div>

            <div className="icon" onClick={() => setShowEmojis(!showEmojis)}>
              <EmojiHappyIcon className="h-[22px] text-[#6f1dc6]" />
            </div>

            <div className="icon">
              <CalendarIcon className="h-[22px] text-[#6f1dc6]" />
            </div>

            {/* {showEmojis && <div ref={ref}> </div>} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Input;
