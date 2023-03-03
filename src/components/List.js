import React, { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { AiTwotoneDelete } from "react-icons/ai";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index.js";

const List = () => {
  const [one, setOne] = useState(true);

  const dispatch = useDispatch();

  var show = useSelector((state) => state.show);
  var update = useSelector((state) => state.updateButton);
  var result = useSelector((state) => state.result);

  var data = useSelector((state) => state.data);

  const {
    UpdateId,
    UpdateValue,
    OpenUpdate,
    ApplyButton,
    ReadData,
    DeleteData,
  } = bindActionCreators(actionCreators, dispatch);

  const [del, setDel] = useState(true);

  const delExpression = async (id) => {
    await DeleteData(id);
    toast.success("Expression deleted successfully!");
    setDel(!del);
  };

  useEffect(() => {
    ReadData();
  }, [del, show, update]);

  return (
    <div className="w-full justify-center flex mt-4 flex-col">
      <ul className="flex w-11/12 justify-center md:w-5/12 flex-col m-auto">
        {data.length >= 0 &&
          data.map((d, i) => {
            return (
              <li
                className="border border-black border-1 py-2 px-4 rounded-lg mb-3 text-lg font-bold flex justify-between"
                key={i}
              >
                {d.expression}

                <div className="flex items-center text-xl cursor-pointer">
                  <FaEdit
                    className=" ml-2 mr-4"
                    onClick={() => {
                      UpdateId(d._id);
                      UpdateValue(d.expression);
                      OpenUpdate(true);
                    }}
                  />
                  <AiTwotoneDelete
                    onClick={() => {
                      delExpression(d._id);
                    }}
                  />

                  <button
                    className="ml-5 text-lg py-1 px-2 bg-cyan-300 rounded-xl mr-2 hover:bg-cyan-200"
                    onClick={() => {
                      UpdateValue(d.expression);
                      ApplyButton(true);
                    }}
                  >
                    Apply
                  </button>
                </div>
              </li>
            );
          })}
      </ul>

      {result != "" && (
        <div className="text-lg mt-5 bg-slate-300 py-3 px-3 font-bold">
          {result}
        </div>
      )}
    </div>
  );
};

export default List;
