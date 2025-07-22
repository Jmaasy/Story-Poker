import ReactGA from 'react-ga4';
import { UaEventOptions } from 'react-ga4/types/ga4';

const sendEvent = (args: UaEventOptions) => ReactGA.event(args);

export const Analytics = {
    trackVotesReveal: (lobbyId: string) => {
        const args = {category: "VotesReveal", action: "revealing_votes", label: `RevealingVotes${lobbyId}`};
        sendEvent(args);
        umami.track('votes-revealed');
    },
    trackVoting: (vote: number | string) => {
        const args = {category: "VoteUpdate", action: "updating_vote", label: vote.toString()};
        sendEvent(args);
        umami.track(`vote-${vote}`);
    },
    trackRegistering: () => {
        const args = {category: "UserRegistered", action: "user_registered", label: `User Registered`};
        sendEvent(args);
        umami.track('user-registered');
    },
    trackCreatedLobby: () => {
        const args = {category: "UserCreatedLobby", action: "user_created_lobby", label: `User Created A Lobby`};
        sendEvent(args);
        umami.track('user-created-lobby');
    },
    trackJoinedLobby: () => {
        const args = {category: "UserJoinedLobby", action: "user_joined_lobby", label: `User Joined A Lobby`};
        sendEvent(args);
        umami.track('user-joined-lobby');
    },
    trackLeftLobby: () => {
        const args = {category: "UserLeftLobby", action: "user_left_lobby", label: `User Left A Lobby`};
        sendEvent(args);
        umami.track('user-left-lobby');
    },
    trackConnectionLost: () => {
        const args = {category: "ConnectionLost", action: "connection_lost", label: `Connection to server was lost`};
        sendEvent(args);
        umami.track('connection-lost');
    },
    trackConnectionSuccess: () => {
        const args = {category: "ConnectionSuccess", action: "connection_success", label: `Connection to server was successful`};
        sendEvent(args);
        umami.track('connection-success');
    },
    trackConnectionRegained: () => {
        const args = {category: "ConnectionRegained", action: "connection_regained", label: `Connection to server has restored`};
        sendEvent(args);
        umami.track('connection-regained');
    },
    initializeTracking: () => {
        ReactGA.initialize("G-CCVCFQYZ2F");
        ReactGA.pageview(window.location.pathname + window.location.search);
    }
}

