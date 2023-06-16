
/**
 * url parserType
 */
export type TUrl = Pick<URL, 'origin'|'protocol'|'host'|'pathname'|'hash'> & {
  params: {
    string: unknown
  }
} 