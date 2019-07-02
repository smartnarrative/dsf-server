import { DSFChannelType } from '../types';

export const mockEventSeries = [
  {
		channel: DSFChannelType.GOVERNANCE,
		source:"http://mockGovFeed",
		govObj: {'openlaw':'createContract'}
  },
  {
		channel: DSFChannelType.FINANCE,
		source:"http://mockFinFeed",
		finObj: {'equipment': 1000}
  },
  {
		channel: DSFChannelType.MARKETING,
		source:"http://mockMktFeed",
		mktObj: {'salesforce': 'platformEvent'}
	},
  {
		channel: DSFChannelType.PRODUCTION,
		source:"http://mockPrdfeed",
		prdObj: {'IoT': 'iotEvent'}
	}
];