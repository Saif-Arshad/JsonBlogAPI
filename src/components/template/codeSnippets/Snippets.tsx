"use client"

import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { GoCopy } from "react-icons/go";
import DoneIcon from '@mui/icons-material/Done';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function Snippets(props:any) {
  const [copy, setCopy] = useState(false);
  const codeString = props.code
  const codeCopy = () => {
    navigator.clipboard.writeText(codeString);
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 5000);
  };

  return (
    codeString && (
      <>
        <div className="hidden dark:flex flex-col mt-11">
          <div
            className="w-full bg-gray-800 py-3 px-4 flex justify-between"
            style={{
              borderTopLeftRadius: "12px",
              borderTopRightRadius: "12px",
            }}
          >
            <h1 className="font-semibold text-sm">{props.text}</h1>
            {copy ? (
              <div className="flex gap-x-1 justify-center items-center">
                <DoneIcon />
                <span>Copied</span>
              </div>
            ) : (
              <div
                className="flex gap-x-1 font-semibold cursor-pointer items-center justify-center"
                onClick={codeCopy}
              >
               <GoCopy size={20} />
                <span>Copy Code</span>
              </div>
              
            )}
          </div>
          <SyntaxHighlighter
            language="jsx"
            lineProps={{ style: { wordBreak: "break-all", whiteSpace: "pre-wrap" } }}
            wrapLines={true}
            style={atomOneDark}
            customStyle={{
              padding: "25px",
              minWidth: "100%",
              borderBottomLeftRadius: "12px",
              borderBottomRightRadius: "12px",
            }}
          >
            {codeString}
          </SyntaxHighlighter>
        </div>
        {/* Light Mode  */}
        <div className="flex dark:hidden flex-col mt-11">
          <div
            className="w-full bg-gray-100 py-3 px-4 flex justify-between"
            style={{
              borderTopLeftRadius: "12px",
              borderTopRightRadius: "12px",
            }}
          >
            <h1 className="font-semibold">{props.text}</h1>
            {copy ? (
              <div className="flex gap-x-1 justify-center items-center">
                <DoneIcon />
                <span>Copied!</span>
              </div>
            ) : (
              <div
                className="flex gap-x-1 font-semibold cursor-pointer items-center justify-center"
                onClick={codeCopy}
              >
               <GoCopy size={20} />
                <span>Copy code</span>
              </div>
              
            )}
          </div>
          <SyntaxHighlighter
            language="jsx"
            lineProps={{ style: { wordBreak: "break-all", whiteSpace: "pre-wrap" } }}
            wrapLines={true}
            style={docco}
            customStyle={{
              padding: "25px",
              minWidth: "100%",
              borderBottomLeftRadius: "12px",
              borderBottomRightRadius: "12px",
            }}
          >
            {codeString}
          </SyntaxHighlighter>
        </div>
      </>
    )
  );
}

export default Snippets;
