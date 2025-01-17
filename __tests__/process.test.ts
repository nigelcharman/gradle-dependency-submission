import {jest, describe, test, expect} from '@jest/globals'
import {processDependencyList} from '../src/process'

jest.setTimeout(240000)

describe('processDependencyList', () => {
  test('run in gradle-example', async () => {
    const dependencies = await processDependencyList(
      true,
      'gradle-example',
      ':app',
      'debugCompileClasspath'
    )
    expect(dependencies).toHaveLength(EXPECTED_GRADLE_DEPENDENCY_OUTPUT.length)
    expect(dependencies).toEqual(EXPECTED_GRADLE_DEPENDENCY_OUTPUT)
  })
})

const EXPECTED_GRADLE_DEPENDENCY_OUTPUT = [
  [
    {
      type: 'maven',
      name: 'kotlin-stdlib-jdk8',
      namespace: 'org.jetbrains.kotlin',
      version: '1.6.10',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'kotlin-stdlib',
      namespace: 'org.jetbrains.kotlin',
      version: '1.6.21',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'kotlin-stdlib',
      namespace: 'org.jetbrains.kotlin',
      version: '1.6.21',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'kotlin-stdlib-common',
      namespace: 'org.jetbrains.kotlin',
      version: '1.6.21',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'kotlin-stdlib',
      namespace: 'org.jetbrains.kotlin',
      version: '1.6.21',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'annotations',
      namespace: 'org.jetbrains',
      version: '13.0',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'kotlin-stdlib-jdk8',
      namespace: 'org.jetbrains.kotlin',
      version: '1.6.10',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'kotlin-stdlib-jdk7',
      namespace: 'org.jetbrains.kotlin',
      version: '1.6.10',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'kotlin-stdlib-jdk7',
      namespace: 'org.jetbrains.kotlin',
      version: '1.6.10',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'kotlin-stdlib',
      namespace: 'org.jetbrains.kotlin',
      version: '1.6.21',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'kotlin-stdlib-jdk8',
      namespace: 'org.jetbrains.kotlin',
      version: '1.6.10',
      qualifiers: null,
      subpath: null
    },
    undefined
  ],
  [
    {
      type: 'maven',
      name: 'ui-tooling',
      namespace: 'androidx.compose.ui',
      version: '1.1.1',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'annotation',
      namespace: 'androidx.annotation',
      version: '1.2.0',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'ui-tooling',
      namespace: 'androidx.compose.ui',
      version: '1.1.1',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'runtime',
      namespace: 'androidx.compose.runtime',
      version: '1.2.0-beta03',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'runtime',
      namespace: 'androidx.compose.runtime',
      version: '1.2.0-beta03',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'kotlinx-coroutines-android',
      namespace: 'org.jetbrains.kotlinx',
      version: '1.6.1',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'kotlinx-coroutines-android',
      namespace: 'org.jetbrains.kotlinx',
      version: '1.6.1',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'kotlinx-coroutines-core',
      namespace: 'org.jetbrains.kotlinx',
      version: '1.6.1',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'kotlinx-coroutines-core',
      namespace: 'org.jetbrains.kotlinx',
      version: '1.6.1',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'kotlinx-coroutines-core-jvm',
      namespace: 'org.jetbrains.kotlinx',
      version: '1.6.1',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'kotlinx-coroutines-core-jvm',
      namespace: 'org.jetbrains.kotlinx',
      version: '1.6.1',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'kotlinx-coroutines-bom',
      namespace: 'org.jetbrains.kotlinx',
      version: '1.6.1',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'kotlinx-coroutines-bom',
      namespace: 'org.jetbrains.kotlinx',
      version: '1.6.1',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'kotlinx-coroutines-android',
      namespace: 'org.jetbrains.kotlinx',
      version: '1.6.1',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'kotlinx-coroutines-bom',
      namespace: 'org.jetbrains.kotlinx',
      version: '1.6.1',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'kotlinx-coroutines-core-jvm',
      namespace: 'org.jetbrains.kotlinx',
      version: '1.6.1',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'kotlinx-coroutines-bom',
      namespace: 'org.jetbrains.kotlinx',
      version: '1.6.1',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'kotlinx-coroutines-core',
      namespace: 'org.jetbrains.kotlinx',
      version: '1.6.1',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'kotlinx-coroutines-core-jvm',
      namespace: 'org.jetbrains.kotlinx',
      version: '1.6.1',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'kotlin-stdlib-jdk8',
      namespace: 'org.jetbrains.kotlin',
      version: '1.6.10',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'kotlinx-coroutines-core-jvm',
      namespace: 'org.jetbrains.kotlinx',
      version: '1.6.1',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'kotlin-stdlib-common',
      namespace: 'org.jetbrains.kotlin',
      version: '1.6.21',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'kotlinx-coroutines-android',
      namespace: 'org.jetbrains.kotlinx',
      version: '1.6.1',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'kotlinx-coroutines-bom',
      namespace: 'org.jetbrains.kotlinx',
      version: '1.6.1',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'kotlinx-coroutines-android',
      namespace: 'org.jetbrains.kotlinx',
      version: '1.6.1',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'kotlin-stdlib-jdk8',
      namespace: 'org.jetbrains.kotlin',
      version: '1.6.10',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'ui-tooling',
      namespace: 'androidx.compose.ui',
      version: '1.1.1',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'ui',
      namespace: 'androidx.compose.ui',
      version: '1.2.0-beta03',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'ui',
      namespace: 'androidx.compose.ui',
      version: '1.2.0-beta03',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'annotation',
      namespace: 'androidx.annotation',
      version: '1.2.0',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'ui',
      namespace: 'androidx.compose.ui',
      version: '1.2.0-beta03',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'runtime-saveable',
      namespace: 'androidx.compose.runtime',
      version: '1.2.0-beta03',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'runtime-saveable',
      namespace: 'androidx.compose.runtime',
      version: '1.2.0-beta03',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'annotation',
      namespace: 'androidx.annotation',
      version: '1.2.0',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'runtime-saveable',
      namespace: 'androidx.compose.runtime',
      version: '1.2.0-beta03',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'runtime',
      namespace: 'androidx.compose.runtime',
      version: '1.2.0-beta03',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'ui',
      namespace: 'androidx.compose.ui',
      version: '1.2.0-beta03',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'ui-geometry',
      namespace: 'androidx.compose.ui',
      version: '1.2.0-beta03',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'ui-geometry',
      namespace: 'androidx.compose.ui',
      version: '1.2.0-beta03',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'annotation',
      namespace: 'androidx.annotation',
      version: '1.2.0',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'ui',
      namespace: 'androidx.compose.ui',
      version: '1.2.0-beta03',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'ui-graphics',
      namespace: 'androidx.compose.ui',
      version: '1.2.0-beta03',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'ui-graphics',
      namespace: 'androidx.compose.ui',
      version: '1.2.0-beta03',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'annotation',
      namespace: 'androidx.annotation',
      version: '1.2.0',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'ui-graphics',
      namespace: 'androidx.compose.ui',
      version: '1.2.0-beta03',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'ui-unit',
      namespace: 'androidx.compose.ui',
      version: '1.2.0-beta03',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'ui-unit',
      namespace: 'androidx.compose.ui',
      version: '1.2.0-beta03',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'annotation',
      namespace: 'androidx.annotation',
      version: '1.2.0',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'ui-unit',
      namespace: 'androidx.compose.ui',
      version: '1.2.0-beta03',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'ui-geometry',
      namespace: 'androidx.compose.ui',
      version: '1.2.0-beta03',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'ui',
      namespace: 'androidx.compose.ui',
      version: '1.2.0-beta03',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'ui-text',
      namespace: 'androidx.compose.ui',
      version: '1.2.0-beta03',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'ui-text',
      namespace: 'androidx.compose.ui',
      version: '1.2.0-beta03',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'annotation',
      namespace: 'androidx.annotation',
      version: '1.2.0',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'ui-text',
      namespace: 'androidx.compose.ui',
      version: '1.2.0-beta03',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'ui-graphics',
      namespace: 'androidx.compose.ui',
      version: '1.2.0-beta03',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'ui-text',
      namespace: 'androidx.compose.ui',
      version: '1.2.0-beta03',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'ui-unit',
      namespace: 'androidx.compose.ui',
      version: '1.2.0-beta03',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'ui',
      namespace: 'androidx.compose.ui',
      version: '1.2.0-beta03',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'ui-unit',
      namespace: 'androidx.compose.ui',
      version: '1.2.0-beta03',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'ui-tooling',
      namespace: 'androidx.compose.ui',
      version: '1.1.1',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'ui-tooling-preview',
      namespace: 'androidx.compose.ui',
      version: '1.1.1',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'ui-tooling-preview',
      namespace: 'androidx.compose.ui',
      version: '1.1.1',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'annotation',
      namespace: 'androidx.annotation',
      version: '1.2.0',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'ui-tooling-preview',
      namespace: 'androidx.compose.ui',
      version: '1.1.1',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'runtime',
      namespace: 'androidx.compose.runtime',
      version: '1.2.0-beta03',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'ui-tooling',
      namespace: 'androidx.compose.ui',
      version: '1.1.1',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'ui-tooling-data',
      namespace: 'androidx.compose.ui',
      version: '1.1.1',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'ui-tooling-data',
      namespace: 'androidx.compose.ui',
      version: '1.1.1',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'annotation',
      namespace: 'androidx.annotation',
      version: '1.2.0',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'ui-tooling-data',
      namespace: 'androidx.compose.ui',
      version: '1.1.1',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'runtime',
      namespace: 'androidx.compose.runtime',
      version: '1.2.0-beta03',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'ui-tooling-data',
      namespace: 'androidx.compose.ui',
      version: '1.1.1',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'ui',
      namespace: 'androidx.compose.ui',
      version: '1.2.0-beta03',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'ui-tooling',
      namespace: 'androidx.compose.ui',
      version: '1.1.1',
      qualifiers: null,
      subpath: null
    },
    undefined
  ],
  [
    {
      type: 'maven',
      name: 'ui-test-manifest',
      namespace: 'androidx.compose.ui',
      version: '1.1.1',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'activity',
      namespace: 'androidx.activity',
      version: '1.4.0',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'activity',
      namespace: 'androidx.activity',
      version: '1.4.0',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'annotation',
      namespace: 'androidx.annotation',
      version: '1.2.0',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'activity',
      namespace: 'androidx.activity',
      version: '1.4.0',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'core',
      namespace: 'androidx.core',
      version: '1.8.0',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'core',
      namespace: 'androidx.core',
      version: '1.8.0',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'annotation',
      namespace: 'androidx.annotation',
      version: '1.2.0',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'core',
      namespace: 'androidx.core',
      version: '1.8.0',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'annotation-experimental',
      namespace: 'androidx.annotation',
      version: '1.1.0',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'core',
      namespace: 'androidx.core',
      version: '1.8.0',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'lifecycle-runtime',
      namespace: 'androidx.lifecycle',
      version: '2.4.1',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'lifecycle-runtime',
      namespace: 'androidx.lifecycle',
      version: '2.4.1',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'lifecycle-common',
      namespace: 'androidx.lifecycle',
      version: '2.4.1',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'lifecycle-common',
      namespace: 'androidx.lifecycle',
      version: '2.4.1',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'annotation',
      namespace: 'androidx.annotation',
      version: '1.2.0',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'lifecycle-runtime',
      namespace: 'androidx.lifecycle',
      version: '2.4.1',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'core-common',
      namespace: 'androidx.arch.core',
      version: '2.1.0',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'core-common',
      namespace: 'androidx.arch.core',
      version: '2.1.0',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'annotation',
      namespace: 'androidx.annotation',
      version: '1.2.0',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'lifecycle-runtime',
      namespace: 'androidx.lifecycle',
      version: '2.4.1',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'annotation',
      namespace: 'androidx.annotation',
      version: '1.2.0',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'core',
      namespace: 'androidx.core',
      version: '1.8.0',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'versionedparcelable',
      namespace: 'androidx.versionedparcelable',
      version: '1.1.1',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'versionedparcelable',
      namespace: 'androidx.versionedparcelable',
      version: '1.1.1',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'annotation',
      namespace: 'androidx.annotation',
      version: '1.2.0',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'versionedparcelable',
      namespace: 'androidx.versionedparcelable',
      version: '1.1.1',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'collection',
      namespace: 'androidx.collection',
      version: '1.1.0',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'collection',
      namespace: 'androidx.collection',
      version: '1.1.0',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'annotation',
      namespace: 'androidx.annotation',
      version: '1.2.0',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'activity',
      namespace: 'androidx.activity',
      version: '1.4.0',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'lifecycle-runtime',
      namespace: 'androidx.lifecycle',
      version: '2.4.1',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'activity',
      namespace: 'androidx.activity',
      version: '1.4.0',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'lifecycle-viewmodel',
      namespace: 'androidx.lifecycle',
      version: '2.3.1',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'lifecycle-viewmodel',
      namespace: 'androidx.lifecycle',
      version: '2.3.1',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'annotation',
      namespace: 'androidx.annotation',
      version: '1.2.0',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'activity',
      namespace: 'androidx.activity',
      version: '1.4.0',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'savedstate',
      namespace: 'androidx.savedstate',
      version: '1.2.0-rc01',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'savedstate',
      namespace: 'androidx.savedstate',
      version: '1.2.0-rc01',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'annotation',
      namespace: 'androidx.annotation',
      version: '1.2.0',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'savedstate',
      namespace: 'androidx.savedstate',
      version: '1.2.0-rc01',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'kotlin-stdlib',
      namespace: 'org.jetbrains.kotlin',
      version: '1.6.21',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'activity',
      namespace: 'androidx.activity',
      version: '1.4.0',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'lifecycle-viewmodel-savedstate',
      namespace: 'androidx.lifecycle',
      version: '2.3.1',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'lifecycle-viewmodel-savedstate',
      namespace: 'androidx.lifecycle',
      version: '2.3.1',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'annotation',
      namespace: 'androidx.annotation',
      version: '1.2.0',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'lifecycle-viewmodel-savedstate',
      namespace: 'androidx.lifecycle',
      version: '2.3.1',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'savedstate',
      namespace: 'androidx.savedstate',
      version: '1.2.0-rc01',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'lifecycle-viewmodel-savedstate',
      namespace: 'androidx.lifecycle',
      version: '2.3.1',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'lifecycle-livedata-core',
      namespace: 'androidx.lifecycle',
      version: '2.3.1',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'lifecycle-livedata-core',
      namespace: 'androidx.lifecycle',
      version: '2.3.1',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'lifecycle-common',
      namespace: 'androidx.lifecycle',
      version: '2.4.1',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'lifecycle-viewmodel-savedstate',
      namespace: 'androidx.lifecycle',
      version: '2.3.1',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'lifecycle-viewmodel',
      namespace: 'androidx.lifecycle',
      version: '2.3.1',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'activity',
      namespace: 'androidx.activity',
      version: '1.4.0',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'kotlin-stdlib',
      namespace: 'org.jetbrains.kotlin',
      version: '1.6.21',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'ui-test-manifest',
      namespace: 'androidx.compose.ui',
      version: '1.1.1',
      qualifiers: null,
      subpath: null
    },
    undefined
  ],
  [
    {
      type: 'maven',
      name: 'core-ktx',
      namespace: 'androidx.core',
      version: '1.8.0',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'annotation',
      namespace: 'androidx.annotation',
      version: '1.2.0',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'core-ktx',
      namespace: 'androidx.core',
      version: '1.8.0',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'core',
      namespace: 'androidx.core',
      version: '1.8.0',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'core-ktx',
      namespace: 'androidx.core',
      version: '1.8.0',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'kotlin-stdlib',
      namespace: 'org.jetbrains.kotlin',
      version: '1.6.21',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'core-ktx',
      namespace: 'androidx.core',
      version: '1.8.0',
      qualifiers: null,
      subpath: null
    },
    undefined
  ],
  [
    {
      type: 'maven',
      name: 'ui',
      namespace: 'androidx.compose.ui',
      version: '1.2.0-beta03',
      qualifiers: null,
      subpath: null
    },
    undefined
  ],
  [
    {
      type: 'maven',
      name: 'material3',
      namespace: 'androidx.compose.material3',
      version: '1.0.0-alpha13',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'foundation',
      namespace: 'androidx.compose.foundation',
      version: '1.2.0-beta03',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'foundation',
      namespace: 'androidx.compose.foundation',
      version: '1.2.0-beta03',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'annotation',
      namespace: 'androidx.annotation',
      version: '1.2.0',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'foundation',
      namespace: 'androidx.compose.foundation',
      version: '1.2.0-beta03',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'animation',
      namespace: 'androidx.compose.animation',
      version: '1.1.1',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'animation',
      namespace: 'androidx.compose.animation',
      version: '1.1.1',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'annotation',
      namespace: 'androidx.annotation',
      version: '1.2.0',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'animation',
      namespace: 'androidx.compose.animation',
      version: '1.1.1',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'animation-core',
      namespace: 'androidx.compose.animation',
      version: '1.1.1',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'animation-core',
      namespace: 'androidx.compose.animation',
      version: '1.1.1',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'annotation',
      namespace: 'androidx.annotation',
      version: '1.2.0',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'animation-core',
      namespace: 'androidx.compose.animation',
      version: '1.1.1',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'kotlinx-coroutines-core',
      namespace: 'org.jetbrains.kotlinx',
      version: '1.6.1',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'animation',
      namespace: 'androidx.compose.animation',
      version: '1.1.1',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'foundation-layout',
      namespace: 'androidx.compose.foundation',
      version: '1.2.0-beta03',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'foundation-layout',
      namespace: 'androidx.compose.foundation',
      version: '1.2.0-beta03',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'annotation',
      namespace: 'androidx.annotation',
      version: '1.2.0',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'foundation-layout',
      namespace: 'androidx.compose.foundation',
      version: '1.2.0-beta03',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'ui',
      namespace: 'androidx.compose.ui',
      version: '1.2.0-beta03',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'foundation-layout',
      namespace: 'androidx.compose.foundation',
      version: '1.2.0-beta03',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'ui-unit',
      namespace: 'androidx.compose.ui',
      version: '1.2.0-beta03',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'animation',
      namespace: 'androidx.compose.animation',
      version: '1.1.1',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'runtime',
      namespace: 'androidx.compose.runtime',
      version: '1.2.0-beta03',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'animation',
      namespace: 'androidx.compose.animation',
      version: '1.1.1',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'ui',
      namespace: 'androidx.compose.ui',
      version: '1.2.0-beta03',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'animation',
      namespace: 'androidx.compose.animation',
      version: '1.1.1',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'ui-geometry',
      namespace: 'androidx.compose.ui',
      version: '1.2.0-beta03',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'foundation',
      namespace: 'androidx.compose.foundation',
      version: '1.2.0-beta03',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'runtime',
      namespace: 'androidx.compose.runtime',
      version: '1.2.0-beta03',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'foundation',
      namespace: 'androidx.compose.foundation',
      version: '1.2.0-beta03',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'ui',
      namespace: 'androidx.compose.ui',
      version: '1.2.0-beta03',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'material3',
      namespace: 'androidx.compose.material3',
      version: '1.0.0-alpha13',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'material-icons-core',
      namespace: 'androidx.compose.material',
      version: '1.0.2',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'material-icons-core',
      namespace: 'androidx.compose.material',
      version: '1.0.2',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'ui',
      namespace: 'androidx.compose.ui',
      version: '1.2.0-beta03',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'material3',
      namespace: 'androidx.compose.material3',
      version: '1.0.0-alpha13',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'material-ripple',
      namespace: 'androidx.compose.material',
      version: '1.0.0',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'material-ripple',
      namespace: 'androidx.compose.material',
      version: '1.0.0',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'foundation',
      namespace: 'androidx.compose.foundation',
      version: '1.2.0-beta03',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'material-ripple',
      namespace: 'androidx.compose.material',
      version: '1.0.0',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'runtime',
      namespace: 'androidx.compose.runtime',
      version: '1.2.0-beta03',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'material3',
      namespace: 'androidx.compose.material3',
      version: '1.0.0-alpha13',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'runtime',
      namespace: 'androidx.compose.runtime',
      version: '1.2.0-beta03',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'material3',
      namespace: 'androidx.compose.material3',
      version: '1.0.0-alpha13',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'ui',
      namespace: 'androidx.compose.ui',
      version: '1.2.0-beta03',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'material3',
      namespace: 'androidx.compose.material3',
      version: '1.0.0-alpha13',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'ui-graphics',
      namespace: 'androidx.compose.ui',
      version: '1.2.0-beta03',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'material3',
      namespace: 'androidx.compose.material3',
      version: '1.0.0-alpha13',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'ui-text',
      namespace: 'androidx.compose.ui',
      version: '1.2.0-beta03',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'material3',
      namespace: 'androidx.compose.material3',
      version: '1.0.0-alpha13',
      qualifiers: null,
      subpath: null
    },
    undefined
  ],
  [
    {
      type: 'maven',
      name: 'ui-tooling-preview',
      namespace: 'androidx.compose.ui',
      version: '1.1.1',
      qualifiers: null,
      subpath: null
    },
    undefined
  ],
  [
    {
      type: 'maven',
      name: 'lifecycle-runtime-ktx',
      namespace: 'androidx.lifecycle',
      version: '2.4.1',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'lifecycle-runtime',
      namespace: 'androidx.lifecycle',
      version: '2.4.1',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'lifecycle-runtime-ktx',
      namespace: 'androidx.lifecycle',
      version: '2.4.1',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'kotlin-stdlib',
      namespace: 'org.jetbrains.kotlin',
      version: '1.6.21',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'lifecycle-runtime-ktx',
      namespace: 'androidx.lifecycle',
      version: '2.4.1',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'kotlinx-coroutines-android',
      namespace: 'org.jetbrains.kotlinx',
      version: '1.6.1',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'lifecycle-runtime-ktx',
      namespace: 'androidx.lifecycle',
      version: '2.4.1',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'annotation',
      namespace: 'androidx.annotation',
      version: '1.2.0',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'lifecycle-runtime-ktx',
      namespace: 'androidx.lifecycle',
      version: '2.4.1',
      qualifiers: null,
      subpath: null
    },
    undefined
  ],
  [
    {
      type: 'maven',
      name: 'activity-compose',
      namespace: 'androidx.activity',
      version: '1.4.0',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'runtime',
      namespace: 'androidx.compose.runtime',
      version: '1.2.0-beta03',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'activity-compose',
      namespace: 'androidx.activity',
      version: '1.4.0',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'runtime-saveable',
      namespace: 'androidx.compose.runtime',
      version: '1.2.0-beta03',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'activity-compose',
      namespace: 'androidx.activity',
      version: '1.4.0',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'activity-ktx',
      namespace: 'androidx.activity',
      version: '1.4.0',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'activity-ktx',
      namespace: 'androidx.activity',
      version: '1.4.0',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'activity',
      namespace: 'androidx.activity',
      version: '1.4.0',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'activity-ktx',
      namespace: 'androidx.activity',
      version: '1.4.0',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'core-ktx',
      namespace: 'androidx.core',
      version: '1.8.0',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'activity-ktx',
      namespace: 'androidx.activity',
      version: '1.4.0',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'lifecycle-runtime-ktx',
      namespace: 'androidx.lifecycle',
      version: '2.4.1',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'activity-ktx',
      namespace: 'androidx.activity',
      version: '1.4.0',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'lifecycle-viewmodel-ktx',
      namespace: 'androidx.lifecycle',
      version: '2.3.1',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'lifecycle-viewmodel-ktx',
      namespace: 'androidx.lifecycle',
      version: '2.3.1',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'lifecycle-viewmodel',
      namespace: 'androidx.lifecycle',
      version: '2.3.1',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'lifecycle-viewmodel-ktx',
      namespace: 'androidx.lifecycle',
      version: '2.3.1',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'kotlin-stdlib',
      namespace: 'org.jetbrains.kotlin',
      version: '1.6.21',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'lifecycle-viewmodel-ktx',
      namespace: 'androidx.lifecycle',
      version: '2.3.1',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'kotlinx-coroutines-android',
      namespace: 'org.jetbrains.kotlinx',
      version: '1.6.1',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'activity-ktx',
      namespace: 'androidx.activity',
      version: '1.4.0',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'savedstate-ktx',
      namespace: 'androidx.savedstate',
      version: '1.2.0-rc01',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'savedstate-ktx',
      namespace: 'androidx.savedstate',
      version: '1.2.0-rc01',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'savedstate',
      namespace: 'androidx.savedstate',
      version: '1.2.0-rc01',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'savedstate-ktx',
      namespace: 'androidx.savedstate',
      version: '1.2.0-rc01',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'kotlin-stdlib',
      namespace: 'org.jetbrains.kotlin',
      version: '1.6.21',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'activity-ktx',
      namespace: 'androidx.activity',
      version: '1.4.0',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'kotlin-stdlib',
      namespace: 'org.jetbrains.kotlin',
      version: '1.6.21',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'activity-compose',
      namespace: 'androidx.activity',
      version: '1.4.0',
      qualifiers: null,
      subpath: null
    },
    {
      type: 'maven',
      name: 'ui',
      namespace: 'androidx.compose.ui',
      version: '1.2.0-beta03',
      qualifiers: null,
      subpath: null
    }
  ],
  [
    {
      type: 'maven',
      name: 'activity-compose',
      namespace: 'androidx.activity',
      version: '1.4.0',
      qualifiers: null,
      subpath: null
    },
    undefined
  ]
]
