import { expect } from 'chai'
import 'mocha'
import 'reflect-metadata'
import { DeleteEmailCommandHandler } from '../../src/commands/handlers/delete-email-command-handler'
import * as sinon from 'ts-sinon'
import { IEmailRepository } from '../../src/repositories/email-repository-interface'

const stubInterface = sinon.stubInterface

describe('Command', () => {
  describe('DeleteEmailCommandHandler', () => {
    let handler
    let testStubRepo

    before(() => {
      testStubRepo = stubInterface<IEmailRepository>({ delete: (id: string) => {} })
      handler = new DeleteEmailCommandHandler(testStubRepo)
    })

    it('Should delete email', () => {
      expect(testStubRepo.delete).to.have.been.all
      handler.handle({ emailId: '1234689' })
    })
  })
})
