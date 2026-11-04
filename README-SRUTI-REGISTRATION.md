# Sruti registration — self, children, or both

This patch updates the existing `/register` page only. It does not enable submission: `VITE_SRUTI_REGISTRATION_API_URL` must remain unset until the Sadhana M9 intake contract and public registration API are verified and protected. Photos are deliberately disabled.

Paths: `self`, `child`, `both`. Payload continues to contain `institution`, `guardian`, `students`, `consents`, and now includes `registrationType` and a per-student `applicantType`. This is a proposed payload requiring backend contract alignment; do not deploy with a live URL yet.

Login, Cognito provisioning, guardian identity verification, invitations and approval are **not** implemented by this frontend patch and must follow the Sadhana workflow after protected import. Registration alone must never grant portal access.

Apply from the Sruti repository root, then run `npm ci && npm run build && npm run dev` and visit `/register`.
