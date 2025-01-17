import * as core from '@actions/core'
import * as github from '@actions/github'
import {Snapshot, Manifest, submitSnapshot} from '@github/dependency-submission-toolkit'
import {prepareDependencyManifest} from './process'

async function run(): Promise<void> {
  core.startGroup(`📘 Reading input values`)
  const useGradlew = core.getBooleanInput('use-gradlew')
  const gradleProjectPath = core.getMultilineInput('gradle-project-path')
  const gradleBuildModule = core.getMultilineInput('gradle-build-module')
  const gradleBuildConfiguration = core.getMultilineInput('gradle-build-configuration')
  const gradleDependencyPath = core.getMultilineInput('gradle-dependency-path')

  const length = gradleProjectPath.length
  if ([gradleBuildModule, gradleBuildConfiguration, gradleDependencyPath].some(x => x.length !== length)) {
    core.setFailed('When passing multiple projects, all inputs must have the same amount of items')
    return
  }

  core.endGroup()

  const manifests: Manifest[] = []

  for (let i = 0; i < length; i++) {
    manifests.push(
      await prepareDependencyManifest(
        useGradlew,
        gradleProjectPath[i],
        gradleBuildModule[i],
        gradleBuildConfiguration[i],
        gradleDependencyPath[i]
      )
    )
  }

  const snapshot = new Snapshot(
    {
      name: 'mikepenz/gradle-dependency-submission',
      url: 'https://github.com/mikepenz/gradle-dependency-submission',
      version: '0.2.0'
    },
    github.context,
    {
      correlator: `${github.context.job}-${gradleBuildModule.join('-')}-${gradleBuildConfiguration}`,
      id: github.context.runId.toString()
    }
  )
  for (const manifest of manifests) {
    snapshot.addManifest(manifest)
  }
  submitSnapshot(snapshot)
  core.endGroup()
}

run()
