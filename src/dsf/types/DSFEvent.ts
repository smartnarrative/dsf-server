export interface DSFEvent {
  channel: string; // Needs to be a string here for SNS MessageAttribute
  source: string;
};

// BUILD OUT EACH EXTENSION INTO CHANNEL-SPECIFIC OBJECTS
export interface DSFGovernanceEvent extends DSFEvent {
  govObj: object;
};

export interface DSFFinanceEvent extends DSFEvent {
  finObj: object;
};

export interface DSFMarketingEvent extends DSFEvent {
  mktObj: object;
};

export interface DSFProductionEvent extends DSFEvent {
  prdObj: object;
};

export type DSFEventContainer = 
            DSFEvent &
            DSFFinanceEvent | 
            DSFGovernanceEvent |
            DSFMarketingEvent |
            DSFProductionEvent;