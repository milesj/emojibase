import { log } from './log';

const failures: string[] = [];

// Validation failures are logged as they happen, so a single run reports all of them,
// and are then raised together by `assertNoFailures`. They are never cleared, so every
// stage that runs after a failure also refuses to continue.
export function reportFailure(type: string, ...messages: string[]) {
	log.error(type, ...messages);

	failures.push(messages.join(' '));
}

export function assertNoFailures(stage: string) {
	if (failures.length > 0) {
		throw new Error(
			`${stage} failed with ${failures.length} validation error(s), see the log above for details.`,
		);
	}
}
