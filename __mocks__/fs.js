import { vi } from 'vitest';

const fs = {
  existsSync: vi.fn(),
  mkdirSync: vi.fn(),
  writeFileSync: vi.fn(),
};

export default fs;
