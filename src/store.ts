import { create } from "zustand";
import zukeeper from "zukeeper";
import { combine } from "zustand/middleware";
import type { Catalog } from "./interfaces/catalog";
import { data } from "../mock/catalog";


interface Store {
    catalog: Catalog[];
    liked: Catalog[] | null;
    addToLiked: (item: Catalog) => void;
    removeLiked: (id: number) => (item: Catalog) => void
    basket: Catalog[] | null;
    addToBasket: (item: Catalog) => void;
    removeBasket: (id: number) => (item: Catalog) => void
}

export const useJewelryStore = create<Store>(
    zukeeper(
        combine({
            catalog: data,
            liked: [] as Catalog[] | null,
            basket: [] as Catalog[] | null
        },
            (set) => ({
                addToLiked: (item: Catalog) => set((state) => ({
                    liked: [...state.liked ?? [], item]
                })),

                removeLiked: (id: number) => set((state) => ({
                    liked: state.liked?.filter((item) => item.id !== id) ?? []
                })),

                addToBasket: (item: Catalog) => set((state) => ({
                    basket: [...state.basket ?? [], item]
                })),

                removeBasket: (id: number) => set((state) => ({
                    basket: state.basket?.filter((item) => item.id !== id) ?? []
                }))

            })
        )
    )
)