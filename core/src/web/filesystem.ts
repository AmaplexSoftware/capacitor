import { WebPlugin } from './index';
import { saveAs } from 'file-saver/FileSaver';

import {
  FileAppendOptions,
  FileAppendResult,
  FileDeleteOptions,
  FileDeleteResult,
  FileReadOptions,
  FileReadResult,
  FilesystemPlugin,
  FileWriteOptions,
  FileWriteResult, GetUriOptions, GetUriResult,
  MkdirOptions,
  MkdirResult, ReaddirOptions, ReaddirResult,
  RmdirOptions,
  RmdirResult, StatOptions, StatResult,
} from '../core-plugin-definitions';

export class FilesystemPluginWeb extends WebPlugin implements FilesystemPlugin {
  constructor() {
    super({
      name: 'Filesystem',
      platforms: ['web']
    });
  }

  readFile(options: FileReadOptions): Promise<FileReadResult> {
    return FilesystemPluginWeb.rejectAPINotAvailable();
  }

  writeFile(options: FileWriteOptions): Promise<FileWriteResult> {
    return new Promise<FileWriteResult>((resolve, reject) => {
      try {
        saveAs(options.data, options.path);
        resolve({});
      } catch (error) {
        reject('Web FileSystem API not available');
      }
    });
  }

  appendFile(options: FileAppendOptions): Promise<FileAppendResult> {
    return FilesystemPluginWeb.rejectAPINotAvailable();
  }

  deleteFile(options: FileDeleteOptions): Promise<FileDeleteResult> {
    return FilesystemPluginWeb.rejectAPINotAvailable();
  }

  mkdir(options: MkdirOptions): Promise<MkdirResult> {
    return FilesystemPluginWeb.rejectAPINotAvailable();
  }

  rmdir(options: RmdirOptions): Promise<RmdirResult> {
    return FilesystemPluginWeb.rejectAPINotAvailable();
  }

  readdir(options: ReaddirOptions): Promise<ReaddirResult> {
    return FilesystemPluginWeb.rejectAPINotAvailable();
  }

  getUri(options: GetUriOptions): Promise<GetUriResult> {
    return FilesystemPluginWeb.rejectAPINotAvailable();
  }

  stat(options: StatOptions): Promise<StatResult> {
    return FilesystemPluginWeb.rejectAPINotAvailable();
  }

  private static rejectAPINotAvailable(): Promise<any> {
    return Promise.reject('Web FileSystem API not available');
  }
}

const Filesystem = new FilesystemPluginWeb();

export { Filesystem };
