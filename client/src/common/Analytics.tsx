import ReactGA from 'react-ga4';
import { UaEventOptions } from 'react-ga4/types/ga4';

const sendEvent = (args: UaEventOptions) => ReactGA.event(args);
const trackEvent = (event: string) => {
    if (umami != undefined) {
        umami.track(event);
    }
}

export const Analytics = {
    trackVotesReveal: (lobbyId: string) => {
        const args = {category: "VotesReveal", action: "revealing_votes", label: `RevealingVotes${lobbyId}`};
        sendEvent(args);
        trackEvent('votes-revealed');
    },
    trackVoting: (vote: number | string) => {
        const args = {category: "VoteUpdate", action: "updating_vote", label: vote.toString()};
        sendEvent(args);
        trackEvent(`vote-${vote}`);
    },
    trackRegistering: () => {
        const args = {category: "UserRegistered", action: "user_registered", label: `User Registered`};
        sendEvent(args);
        trackEvent('user-registered');
    },
    trackCreatedLobby: () => {
        const args = {category: "UserCreatedLobby", action: "user_created_lobby", label: `User Created A Lobby`};
        sendEvent(args);
        trackEvent('user-created-lobby');
    },
    trackJoinedLobby: () => {
        const args = {category: "UserJoinedLobby", action: "user_joined_lobby", label: `User Joined A Lobby`};
        sendEvent(args);
        trackEvent('user-joined-lobby');
    },
    trackLeftLobby: () => {
        const args = {category: "UserLeftLobby", action: "user_left_lobby", label: `User Left A Lobby`};
        sendEvent(args);
        trackEvent('user-left-lobby');
    },
    trackConnectionLost: () => {
        const args = {category: "ConnectionLost", action: "connection_lost", label: `Connection to server was lost`};
        sendEvent(args);
        trackEvent('connection-lost');
    },
    trackConnectionSuccess: () => {
        const args = {category: "ConnectionSuccess", action: "connection_success", label: `Connection to server was successful`};
        sendEvent(args);
        trackEvent('connection-success');
    },
    trackConnectionRegained: () => {
        const args = {category: "ConnectionRegained", action: "connection_regained", label: `Connection to server has restored`};
        sendEvent(args);
        trackEvent('connection-regained');
    },
    initializeTracking: () => {
        ReactGA.initialize("G-CCVCFQYZ2F");
        ReactGA.pageview(window.location.pathname + window.location.search);
    }
}

/**
 * hack to make compiler happy :D
 */
declare var umami: umami.umami;
declare namespace umami {
    interface umami {
        track(
            event_name: string,
            event_data?: { [key: string]: any },
        ): Promise<string> | undefined;
    }
}