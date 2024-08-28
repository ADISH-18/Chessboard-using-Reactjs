import React from "react";
import {
    FaChessKing,
    FaChessQueen,
    FaChessRook,
    FaChessBishop,
    FaChessKnight,
    FaChessPawn,
} from "react-icons/fa";
import "./Chessboard.css";

const Chessboard = () => {
    const board = [
        [<FaChessRook />, <FaChessKnight />, <FaChessBishop />, <FaChessQueen />, <FaChessKing />, <FaChessBishop />, <FaChessKnight />, <FaChessRook />],
        [<FaChessPawn />, <FaChessPawn />, <FaChessPawn />, <FaChessPawn />, <FaChessPawn />, <FaChessPawn />, <FaChessPawn />, <FaChessPawn />],
        Array(8).fill(null),
        Array(8).fill(null),
        Array(8).fill(null),
        Array(8).fill(null),
        [<FaChessPawn />, <FaChessPawn />, <FaChessPawn />, <FaChessPawn />, <FaChessPawn />, <FaChessPawn />, <FaChessPawn />, <FaChessPawn />],
        [<FaChessRook />, <FaChessKnight />, <FaChessBishop />, <FaChessQueen />, <FaChessKing />, <FaChessBishop />, <FaChessKnight />, <FaChessRook />],
    ];

    return (
        <div className="chess">
        <div className="chessboard">
            {board.map((row, rowIndex) =>
                row.map((piece, colIndex) => (
                    <div
                        key={`${rowIndex}-${colIndex}`}
                        className={`square ${(rowIndex + colIndex) % 2 === 0 ? "white-square" : "black-square"}`}
                    >
                        {piece && (
                            <span className={rowIndex < 2 ? "black-piece" : "white-piece"}>
                                {piece}
                            </span>
                        )}
                    </div>
                ))
            )}
        </div>
        </div>
    );
};

export default Chessboard;
