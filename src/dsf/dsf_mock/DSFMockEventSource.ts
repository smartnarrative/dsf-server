import { interval, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { publishDSFEventContainer, 
				 processDSFEventContainer, 
				 initDSFNode } from '../DSFNode';
import { DSFEventContainer } from '../types';

export const fetchMockEventSeries = async (series: DSFEventContainer[]) => {
	initDSFNode();
  series.forEach(e => processDSFEventContainer(e));
}

export const publishMockEventSeries = async (series: DSFEventContainer[]) => {
	const source = interval(1000);
	const timer$ = timer(1000 * (series.length + 1));
	const pubQueue = source
									.pipe(
										takeUntil(timer$)
									);
	const subscribe = pubQueue
										.subscribe(index => {
											publishDSFEventContainer(series[index]);
										});
}
