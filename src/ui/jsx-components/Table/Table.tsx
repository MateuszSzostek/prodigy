import React from "react";
import { NTDTable } from "../../../types/table";
import { blockNoRefStr, spliceIntoChunks } from "../../../utils";
//@ts-ignore
import cloneDeep from "../../../utils/cloneDeep";
import Button from "../Button";
import useTable from "./useTable";

export default function Table(props: NTDTable.ITable) {
  const {
    currentPage,
    setCurrentPage,
    getMiddlePagination,
    roundClass,
    shadeClass,
    borderClass,
    bgColorClass,
    labelColorClass,
    borderColorClass,
    sizeClass,
    labelSizeClass,
  } = useTable(props);

  return (
    <div className={"table__container w-full"}>
      {props?.title && (
        <div className={`text-bold my-05 ${labelSizeClass}`}>
          {props?.title}
        </div>
      )}
      <div
        className={`table__wrapper w-full border-collapse p-05 ${roundClass}${shadeClass}${borderClass}${bgColorClass}${borderColorClass}`}
      >
        <table className={`table__table w-full border-collapse`}>
          <tbody className={`table__tbody`}>
            <tr
              className={`table__header-row ${sizeClass} ${blockNoRefStr(
                props?.rowsExtraClass
              )}`}
            >
              {props?.columns?.map((el, idx) => (
                <th
                  key={idx}
                  style={{
                    width: blockNoRefStr(el?.width, "auto"),
                  }}
                  className={`table__header text-left p-05 ${labelColorClass}`}
                >
                  {el?.header()}{" "}
                </th>
              ))}
            </tr>
            {spliceIntoChunks(cloneDeep(props?.data), props?.itemsPerPage)[
              currentPage
              //@ts-ignore
            ]?.map((row, rowIdx) => (
              <tr
                className={`table__row border-top-1 border-00625 border-gray-07 hover-pointer trans-03 hover-opacity-07 ${sizeClass}`}
                key={rowIdx}
              >
                {props?.columns?.map((sel, selIdx) => (
                  <td
                    key={selIdx}
                    style={{
                      width: blockNoRefStr(sel?.width, "auto"),
                    }}
                    className={`table__cell p-05 ${labelColorClass}`}
                  >
                    {sel?.cell(row[sel?.selector], rowIdx)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={`table__pagination-container mt-05`}>
        <Button
          round
          size="sm"
          appearance="soft"
          extraClass={`table__first-page-btn m-02`}
          base={{
            onClick: () => setCurrentPage(0),
            disabled: currentPage > 0 ? false : true,
          }}
        >
          {`|<`}
        </Button>

        <Button
          round
          size="sm"
          appearance="soft"
          extraClass={`table__previous-page-btn m-02`}
          base={{
            onClick: () => setCurrentPage((state) => state - 1),
            disabled: currentPage > 0 ? false : true,
          }}
        >
          {`<`}
        </Button>
        {currentPage - 3 > 1 && <span className="m-02">...</span>}

        {getMiddlePagination(
          spliceIntoChunks(cloneDeep(props?.data), props?.itemsPerPage).length,
          currentPage
        )?.map((el, idx) => (
          <Button
            key={idx}
            round
            size="sm"
            appearance="soft"
            extraClass={`table__page-btn m-02`}
            base={{
              onClick: () => setCurrentPage(el - 1),
              disabled: currentPage === el ? true : false,
            }}
          >
            {el}
          </Button>
        ))}

        {currentPage + 3 <
          spliceIntoChunks(cloneDeep(props?.data), props?.itemsPerPage)
            .length && <span className="m-02">...</span>}

        <Button
          round
          size="sm"
          appearance="soft"
          extraClass={`table__next-page-btn m-02`}
          base={{
            onClick: () => setCurrentPage((state) => state + 1),
            disabled:
              currentPage <
              spliceIntoChunks(cloneDeep(props?.data), props?.itemsPerPage)
                .length -
                1
                ? false
                : true,
          }}
        >
          {`>`}
        </Button>

        <Button
          round
          size="sm"
          appearance="soft"
          extraClass={`table__last-page-btn m-02`}
          base={{
            onClick: () =>
              setCurrentPage(
                spliceIntoChunks(cloneDeep(props?.data), props?.itemsPerPage)
                  .length - 1
              ),
            disabled:
              currentPage <
              spliceIntoChunks(cloneDeep(props?.data), props?.itemsPerPage)
                .length -
                1
                ? false
                : true,
          }}
        >
          {`>|`}
        </Button>

        <span>
          Page {currentPage + 1} of{" "}
          {spliceIntoChunks(cloneDeep(props?.data), props?.itemsPerPage).length}
        </span>
      </div>
    </div>
  );
}
