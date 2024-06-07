import { ViewRef } from "@angular/core";
import { createStore } from "@ngneat/elf";
import {
  withEntities,
  selectAllEntities,
  setEntities,
  addEntities,
  deleteEntities,
  updateEntities,
  getAllEntities,
  getEntity,
  getEntitiesCount,
  getAllEntitiesApply,
  updateEntitiesIds
} from "@ngneat/elf-entities";
import { Subject } from "rxjs";

export interface Tab {
  id: string;
  name: string;
  isLoading: boolean;
  hasChanges: boolean;
  componentRef: ViewRef | null;
  loadComponent: () => Promise<any>;
  input?: { [key: string]: any };
  output?: { [key: string]: any };
}

export const store = createStore({ name: "tab" }, withEntities<Tab>());

export const tabActivated$ = new Subject<{ tab: Tab; index?: number }>();
export const tabAdded$ = new Subject<Tab>();
export const tabClose$ = new Subject<number | undefined>();

export const TabStore = {
  Count: () => store.query(getEntitiesCount()),

  Select: store.pipe(selectAllEntities()),

  Get: () => store.query(getAllEntities()),

  GetById: (id: Tab["id"]) => store.query(getEntity(id)),

  GetActiveTab: () =>
    store.query(
      getAllEntitiesApply({ filterEntity: x => x.isLoading === true })
    ),

  GetLast: () => store.query(getAllEntities()).at(-1),

  Set: (tabs: Tab[]) => {
    store.update(setEntities(tabs));
  },

  Add: (tab: Tab) => {
    try {
      store.update(addEntities(tab));
      tabAdded$.next(tab);
    } catch (e) {
      if ((e as Error).message && (e as Error).message.includes("exists")) {
        tab = TabStore.GetById(tab.id)!;
        TabStore.Activate(tab);
      }
    }
  },

  Update: (id: Tab["id"], tab: Partial<Tab>) => {
    store.update(updateEntities(id, tab));
  },

  UpdateIsLoading: (id: Tab["id"], isLoading: boolean) => {
    store.update(updateEntities(id, { isLoading }));
  },

  UpdateComponentRef: (id: Tab["id"], componentRef: ViewRef) => {
    store.update(updateEntities(id, { componentRef }));
  },

  UpdateHasChanges: (id: Tab["id"], hasChanges: boolean) => {
    store.update(updateEntities(id, { hasChanges }));
  },

  UpdateId: (id: Tab["id"], newId: string) => {
    store.update(updateEntitiesIds([id], [newId]));
  },

  UpdateName: (id: Tab["id"], name: string) => {
    store.update(updateEntities(id, { name }));
  },

  UpdateIdName: (id: Tab["id"], newId: string, name: string) => {
    store.update(
      updateEntitiesIds([id], [newId]),
      updateEntities(newId, { name })
    );
  },

  Delete: (tab: Tab) => {
    store.update(deleteEntities(tab.id));
  },

  Activate: (tab: Tab, index?: number) => {
    tabActivated$.next({ tab, index });
  },

  Close: (index?: number) => {
    tabClose$.next(index);
  }
};
