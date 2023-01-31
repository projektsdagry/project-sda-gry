import React, { useEffect } from "react";
import { useAppDispatch } from "../../app/hooks";
import { Randomizer } from "../../components/randomizer/randomizer";
import { getGamesAsync } from "../../slices/randomizer-slice";

export const RandomizerView: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      const page = Math.floor(Math.random() * 50 + 1);
      dispatch(getGamesAsync({ page, pageSize: 40 }));
    })();
  }, []);

  return (
    <div>
      <Randomizer />
    </div>
  );
};
