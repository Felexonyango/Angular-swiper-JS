export interface DaySchedule {
  day: string;

  suggests: SuggestItem[];
}

export interface SuggestItem {
  freeTime: string;
  suggestion?: string;
  time: string;
  blocked: boolean;
  suggested: SuggestedItem[];
}

export interface SuggestedItem {
  text: string;
  checked: boolean;
  canceled: boolean;
}
