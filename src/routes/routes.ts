import { Request, Response } from "express";
import { publishMockEventSeries, fetchMockEventSeries } from '../dsf/dsf_mock/DSFMockEventSource';
import { mockEventSeries } from '../dsf/dsf_mock/DSFMockEvents';

export default [
  {
    path: "/fetchMockSeries",
    method: "post",
    handler: [
      async (req: Request, res: Response) => {
        await fetchMockEventSeries(mockEventSeries)
              .then(events => res.json({message: events}));
      }
    ]
  },
  {
    path: "/publishMockSeries",
    method: "post",
    handler: [
      async (req: Request, res: Response) => {
        await publishMockEventSeries(mockEventSeries);
        res.json({message: 'sent'});
      }
    ]
  },
];
