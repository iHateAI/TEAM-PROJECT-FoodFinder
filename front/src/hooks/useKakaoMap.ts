import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { SearchValue } from '../types/search/searchType';
import {
  MARKER_IMAGE_URL,
  IMAGE_SIZE_WIDTH,
  IMAGE_SIZE_HEIGHT,
  SPRITE_SIZE_WIDTH,
  SPRITE_SIZE_HEIGHT,
  OFFSET_X,
  OFFSET_Y,
  DEFAULT_LAT,
  DEFAULT_LNG,
} from '../constants/kakaoMap';

const useKakaoMap = (searchResult: string) => {
  const [kakaoMap, setkakaoMap] = useState<kakao.maps.Map>();
  const [placesResult, setPlacesResult] =
    useState<kakao.maps.services.PlacesSearchResult>();
  const [pagination, setPagination] = useState<kakao.maps.Pagination>();
  const [markers, setMakers] = useState<kakao.maps.Marker[]>([]);
  const mapRef = useRef<HTMLDivElement>(null);
  const ps = new kakao.maps.services.Places();
  const infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
  const imageSize = new kakao.maps.Size(IMAGE_SIZE_WIDTH, IMAGE_SIZE_HEIGHT);
  const spriteSize = new kakao.maps.Size(SPRITE_SIZE_WIDTH, SPRITE_SIZE_HEIGHT);
  const offset = new kakao.maps.Point(OFFSET_X, OFFSET_Y);

  useEffect(() => {
    if (mapRef === null) return;
    const mapContainer = mapRef.current;
    const mapOption = {
      center: new kakao.maps.LatLng(DEFAULT_LAT, DEFAULT_LNG),
      level: 10,
    };
    const map = new kakao.maps.Map(mapContainer as HTMLDivElement, mapOption);

    setkakaoMap(map);
  }, [mapRef]);

  useEffect(() => {
    placesResult && addMarker(placesResult);
  }, [placesResult]);

  const handlePlacesSearch = useCallback(
    (data: SearchValue) => {
      const { keyword } = data;
      ps.keywordSearch(
        searchResult + ' ' + keyword,
        (result, status, pagination) => {
          setPlacesResult(result);
          setPagination(pagination);
        },
      );
    },
    [placesResult, pagination, setPlacesResult, setPagination],
  );

  const addMarker = useCallback(
    (result: kakao.maps.services.PlacesSearchResult) => {
      removeMarker();
      if (!kakaoMap) return;
      const bounds = new kakao.maps.LatLngBounds();
      result.forEach((place, index) => {
        const { x, y } = place;
        const placePosition = new kakao.maps.LatLng(Number(y), Number(x));
        const imgOptions = {
          spriteSize: spriteSize,
          spriteOrigin: new kakao.maps.Point(0, index * 46 + 10),
          offset: offset,
        };
        const markerImage = new kakao.maps.MarkerImage(
          MARKER_IMAGE_URL,
          imageSize,
          imgOptions,
        );
        const marker = new kakao.maps.Marker({
          position: placePosition,
          image: markerImage,
        });
        bounds.extend(placePosition);
        marker.setMap(kakaoMap);
        setMakers((prev) => {
          return [...prev, marker];
        });
      });
    },
    [placesResult, markers, setMakers, setPlacesResult],
  );

  const removeMarker = () => {
    markers.forEach((marker) => {
      marker.setMap(null);
    });
    setMakers([]);
  };

  const pages = useMemo<number[]>(() => {
    const temp: number[] = [];

    if (!pagination) return temp;

    const { last } = pagination;
    for (let i = 0; i < last; i++) {
      temp.push(i + 1);
    }
    return temp;
  }, [pagination]);

  const currentPage = useMemo<number>(() => {
    return pagination?.current as number;
  }, [pagination]);

  const gotoPage = useMemo<(page: number) => void>(() => {
    return pagination?.gotoPage as (page: number) => void;
  }, [pagination]);

  return {
    kakaoMap,
    mapRef,
    placesResult,
    pages,
    currentPage,
    gotoPage,
    handlePlacesSearch,
  };
};

export default useKakaoMap;
