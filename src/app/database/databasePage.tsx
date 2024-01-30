"use client";
import React, { useEffect, useState } from "react";
import { default as useDatabaseStore } from "../store/databaseStore";
import { ListCollections, ListDocuments } from "./databaseMethods";

const DatabasePage = () => {
  const { selectedDatabase, activeIndex, setActiveIndex } = useDatabaseStore();
  const [collections, setCollections] = useState<string[]>([]);
  const [collectionData, setCollectionData] = useState<string[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const uri = localStorage.getItem("databaseUri");
      ListCollections(selectedDatabase, uri).then((result) => {
        if (result) {
          setCollections(result);
        }
      });
    }
  }, [selectedDatabase]);

  const handleCollectionClick = (collection: string, index: number) => {
    if (typeof window !== "undefined") {
      const uri = localStorage.getItem("databaseUri");
      ListDocuments(selectedDatabase, collection, uri).then((result) => {
        setCollectionData(result);
      });
    }
  };

  return (
    <div className="">
      {selectedDatabase !== "" && (
        <div>
          <div>Selected Database: {selectedDatabase}</div>
          <div>Collections:</div>
          <div>
            {collections.map((collection, collectionIndex) => (
              <div
                key={collectionIndex}
                className="collapse collapse-arrow bg-base-300"
              >
                <input
                  type="radio"
                  name="my-accordion-1"
                  checked={activeIndex === collectionIndex}
                  onChange={() => {
                    setCollectionData([]);
                    setActiveIndex(collectionIndex);
                    handleCollectionClick(collection, collectionIndex);
                  }}
                />
                <div className="collapse-title text-xl font-medium">
                  {collection}
                </div>
                <div className="collapse-content truncate bg-base-200">
                  {collectionData.map((doc, docIndex) => (
                    <div key={docIndex}>
                      <pre>{JSON.stringify(JSON.parse(doc), null, 2)}</pre>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default DatabasePage;
