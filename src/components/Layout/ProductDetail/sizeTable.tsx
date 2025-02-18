import type { BrandItem, tagsChild } from "@/types/products";
import React from "react";

// 定义手指名称映射，用于表头
const fingerMap = {
  "Thumb": "Thumb",
  "Index": "Index",
  "Middle": "Middle",
  "Ring": "Ring",
  "Pinky": "Pinky"
};

function SizeTable({ brand, tags }: { brand: BrandItem, tags: tagsChild[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200 text-sm">
            <th className="border border-gray-300 px-1 py-1 md:px-4 md:py-2 text-center">Size/mm</th>
            {Object.values(fingerMap).map((finger) => (
              <th
                key={finger}
                className="border border-gray-300 px-1 py-1 md:px-4 md:py-2 text-center"
              >
                {finger}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-sm">
          {tags.map((tag, index) => (
            <tr key={index}>
              <td className="border bg-gray-100 border-gray-300 px-1 py-1 md:px-4 md:py-2 text-center">
                {tag.title}
              </td>
              {/* 假设 tag.Children 包含手指相关的数据 */}
              {tag.Children?.map((child, index) => (
                <td
                  key={index+ '-' + index}
                  className="border border-gray-300 px-1 py-1 md:px-4 md:py-2 text-center"
                >
                  {child.value_cm || 'N/A'}
                </td>
              ))}
            </tr>
          ))}                
          </tbody>
      </table>
    </div>
  );
}

export default SizeTable;