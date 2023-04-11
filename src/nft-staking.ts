import {
  Staked
} from "../generated/NFTStaking/NFTStaking"
import { StakeEvent } from "../generated/schema"

export function handleStaked(event: Staked): void {
  let entity = new StakeEvent(event.params.tokenId.toHex())
  entity.user = event.params.user
  entity.save()
}
