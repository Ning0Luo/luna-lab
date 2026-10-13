// Add one entry per tool. The page renders cards from this list.
// Fields: name, tagline, description, tags (array), status ("stable" | "beta" | "research"),
//         links: { code, paper, demo } (all optional),
//         image (optional illustration path), featured (true = full-width dark tile),
//         highlights: [{ value, label }], steps: [{ title, text }], integrations: [{name, href}] (all optional)
//
// Example:
// {
//   name: "r1cs-synth",
//   tagline: "Verified check-don't-compute R1CS rewrites",
//   description: "An LLM agent that finds cheaper R1CS encodings for Rust functions and proves them equivalent.",
//   tags: ["ZK", "Synthesis"],
//   status: "research",
//   links: { code: "https://github.com/...", paper: "https://eprint.iacr.org/..." }
// },
window.LUNA_TOOLS = [
  {
    name: "Sherlock",
    tagline: "Each AI agent passed review. Together, they leaked the key.",
    description: "Finds what the AI agents on your laptop (Claude Code, Codex, Cursor and more) can do as a group: the cheapest attack, step by step, or a certificate that none exists.",
    tags: ["AI agents", "Security", "SAT"],
    status: "research",
    links: { demo: "https://sherlocksec.org" },
    image: "assets/sherlock.svg",
    featured: true,
    steps: [
      { title: "Rules", text: "Write rules like never ssh → internet, each with a budget of hacked agents and Allow clicks it must survive." },
      { title: "Rights", text: "The scanner reads every agent's permissions. It never opens a secret and sends nothing anywhere." },
      { title: "Solve", text: "Rules and rights compile to one SAT problem. A solution is a concrete attack; otherwise you get a proof a separate checker verifies." }
    ],
    integrations: [
      { name: "AWS", href: "https://github.com/Ning0Luo/sherlock/blob/main/examples/bedrock/README.md" },
      { name: "LangGraph", href: "https://github.com/Ning0Luo/sherlock/blob/main/examples/langgraph/README.md" }
    ]
  },
  {
    name: "Confidential Data Rental",
    tagline: "Rent your data without handing it over.",
    description: "A data owner encrypts a dataset. A computation party ships its code as a container image. Google's hardware attestation releases the key only to the exact image the owner approved, inside a Confidential VM. Change one line of the code and the key stays locked.",
    tags: ["Confidential computing", "Data", "Privacy"],
    status: "research",
    // Add demo: "<portal url>" as the first link once the public portal is up; it renders as the "Try it" pill.
    links: {
      "Watch the demo": "assets/data-rental-demo.mp4",
      "Slides": "assets/data-rental/slides.html",
      "Evidence": "assets/data-rental/evidence.html"
    },
    image: "assets/data-rental.svg",
    featured: true,
    steps: [
      { title: "Promise", text: "The computation party uploads its code. It becomes a container image whose digest, a fingerprint of every byte, is published to the owner." },
      { title: "Approve", text: "The owner approves that digest and uploads encrypted data. Their key policy on Google Cloud names that digest and nothing else." },
      { title: "Run", text: "A Confidential VM boots the image. Google attests it; the key is released only if the digest matches. The result goes back sealed to the computation party." }
    ]
  },
];
