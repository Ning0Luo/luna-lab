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
    tagline: "Two of three, each. All three, together.",
    description: "Meta\u2019s Agents Rule of Two says an agent should hold at most two of: untrusted input, secrets, outside actions. Sherlock finds the fleets where each agent obeys it and the group still breaks it \u2014 the cheapest attack, step by step, or a proof that none exists.",
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
    description: "A data owner encrypts a dataset. A computation party ships its code as a container image. Google's hardware attestation releases the key only to the exact image the owner approved, inside a Confidential VM. Change one line of the code and the key stays locked. The renter can also state requirements on the data; the owner learns only whether they hold.",
    tags: ["Confidential computing", "Data", "Privacy"],
    status: "research",
    // The first link renders as the "Try it" pill. The portal needs an invite code to register.
    links: {
      demo: "https://rental-34-9-243-171.sslip.io",
      "Watch the demo": "assets/data-rental-demo-v2.mp4",
      "Slides": "https://claude.ai/artifact/ED1ABRVmt9h68szUMpxL8f",
      "Evidence": "https://claude.ai/artifact/LumwkkY3Pj1S3cXsvEc7P6"
    },
    image: "assets/data-rental.svg",
    featured: true,
    steps: [
      { title: "Promise", text: "The computation party uploads its code and, privately, its requirements on the data. Each becomes a container image; the owner sees only the digests, fingerprints of every byte." },
      { title: "Approve", text: "The owner approves those digests and uploads encrypted data. Their key policy on Google Cloud names those digests and nothing else." },
      { title: "Run", text: "Confidential VMs boot the images. Google attests them; keys are released only to approved digests. The owner learns one bit about the requirements, satisfied or not. The result goes back sealed." }
    ]
  },
];
