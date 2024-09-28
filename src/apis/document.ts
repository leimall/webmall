import type { documentType } from '@/types/document'
import type { ResponseData } from '@/types/respones'
import request from '@/utils/request'
type documentResponse = ResponseData<documentType>


export const getDocumentFromTitle = (data: { title: string }): Promise<documentResponse> => {
  return request({
    url: '/document/title',
    method: 'get',
    params: data
  })
}
